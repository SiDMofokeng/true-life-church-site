// netlify/functions/fetchYouTube.js
const API_KEY = process.env.YT_API_KEY
const CHANNEL_ID = process.env.YT_CHANNEL_ID
const UPLOADS_PLAYLIST_ID = process.env.YT_UPLOADS_PLAYLIST_ID // optional override

const YT_API = 'https://www.googleapis.com/youtube/v3'

async function httpGet(url) {
  const res = await fetch(url)
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`HTTP ${res.status}: ${text}`)
  }
  return res.json()
}

export const handler = async () => {
  try {
    if (!API_KEY) throw new Error('Missing YT_API_KEY')
    if (!CHANNEL_ID && !UPLOADS_PLAYLIST_ID) throw new Error('Missing YT_CHANNEL_ID or YT_UPLOADS_PLAYLIST_ID')

    // 1) Get uploads playlist id (unless provided)
    let uploadsId = UPLOADS_PLAYLIST_ID
    if (!uploadsId) {
      const url =
        `${YT_API}/channels?part=contentDetails&id=${encodeURIComponent(CHANNEL_ID)}&key=${encodeURIComponent(API_KEY)}`
      const data = await httpGet(url)
      uploadsId = data?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads
      if (!uploadsId) throw new Error('Could not resolve uploads playlist for channel')
    }

    // 2) Fetch latest items
    const listUrl =
      `${YT_API}/playlistItems?part=snippet,contentDetails&maxResults=12&playlistId=${uploadsId}&key=${encodeURIComponent(API_KEY)}`
    const list = await httpGet(listUrl)

    const videos = (list.items || []).map((it) => {
      const sn = it.snippet || {}
      const cd = it.contentDetails || {}
      const vid = cd.videoId || sn.resourceId?.videoId
      const thumbs = sn.thumbnails || {}
      const bestThumb =
        thumbs.maxres || thumbs.standard || thumbs.high || thumbs.medium || thumbs.default || {}
      return {
        id: vid,
        title: sn.title,
        publishedAt: sn.publishedAt,
        thumbnail: bestThumb.url || '',
        channelTitle: sn.channelTitle,
        url: vid ? `https://www.youtube.com/watch?v=${vid}` : sn.resourceId?.videoId,
      }
    })

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
      body: JSON.stringify({ uploadsPlaylistId: uploadsId, videos }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'YouTube fetch failed', details: String(err) }),
    }
  }
}

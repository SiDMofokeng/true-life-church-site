// netlify/functions/fetchPodcast.js
import Parser from 'rss-parser'

const parser = new Parser({
  customFields: {
    item: [
      ['itunes:duration', 'duration'],
      ['itunes:image', 'itunesImage', { keepArray: false }],
      ['itunes:episode', 'episode'],
      ['itunes:subtitle', 'subtitle'],
    ],
  },
})

export const handler = async () => {
  try {
    const feedUrl =
      process.env.PODCAST_RSS_URL ||
      'https://feeds.simplecast.com/54nAGcIl' // demo feed; replace in Netlify env

    const feed = await parser.parseURL(feedUrl)

    const episodes = (feed.items || []).map((it) => ({
      id: it.guid || it.link,
      title: it.title,
      pubDate: it.pubDate,
      audioUrl: (it.enclosure && it.enclosure.url) || '',
      duration: it.duration || '',
      description: it.contentSnippet || '',
      image: it.itunesImage?.href || feed.image?.url || '',
      link: it.link,
    }))

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
      body: JSON.stringify({ title: feed.title, episodes }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'RSS parse failed', details: String(err) }),
    }
  }
}

// src/lib/youtube.js
export async function getVideos() {
  const res = await fetch('/.netlify/functions/fetchYouTube')
  if (!res.ok) throw new Error('Failed to load videos')
  return res.json()
}

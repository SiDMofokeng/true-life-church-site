// src/lib/podcast.js
export async function getEpisodes() {
  const res = await fetch('/.netlify/functions/fetchPodcast')
  if (!res.ok) throw new Error('Failed to load episodes')
  return res.json()
}

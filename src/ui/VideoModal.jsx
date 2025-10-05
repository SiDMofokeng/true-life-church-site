// src/ui/VideoModal.jsx
import Modal from './Modal.jsx'

export default function VideoModal({ open, onClose, video }) {
  const vid = video?.id
  const title = video?.title || 'YouTube video'
  const src = vid ? `https://www.youtube.com/embed/${vid}?autoplay=1&rel=0` : ''

  return (
    <Modal open={open} onClose={onClose} ariaLabel={title}>
      <div className="aspect-video bg-black">
        {vid ? (
          <iframe
            title={title}
            src={src}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-white/80">No video selected</div>
        )}
      </div>
    </Modal>
  )
}

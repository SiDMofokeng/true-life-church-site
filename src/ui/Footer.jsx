// src/ui/Footer.jsx
export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="container-narrow py-6 text-sm text-slate-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} True Life Church</p>
        <p>Built with React + Vite</p>
      </div>
    </footer>
  )
}

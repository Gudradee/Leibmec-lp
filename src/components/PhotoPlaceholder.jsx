export function PhotoPlaceholder({ label, className = '', aspectRatio = 'aspect-video' }) {
  return (
    <div
      className={`${aspectRatio} rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <span className="text-gray-500 text-sm font-sans-custom text-center px-4">{label}</span>
    </div>
  )
}

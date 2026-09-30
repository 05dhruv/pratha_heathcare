// Shows the image if a src exists, otherwise a neutral placeholder block.
export default function Photo({ src, alt = "", label, className = "" }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} loading="lazy" className={`object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={alt || label}
      className={`flex items-center justify-center bg-gradient-to-br from-ink to-leaf p-4 text-center text-sm font-medium text-white/80 ${className}`}
    >
      {label || alt}
    </div>
  );
}

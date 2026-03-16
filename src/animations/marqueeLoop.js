export function initMarquee() {
  const track = document.getElementById('marquee-track')
  if (!track) return

  const content = track.querySelector('.marquee-content')
  if (!content) return

  // Duplicate content for seamless loop
  const clone = content.cloneNode(true)
  track.appendChild(clone)

}

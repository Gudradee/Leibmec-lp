export function initMarquee() {
  const track = document.getElementById('marquee-track')
  if (!track) return

  const source = track.querySelector('.marquee-content')
  if (!source) return

  // Rebuild track to avoid accumulating clones after route updates.
  track.innerHTML = ''
  const first = source.cloneNode(true)
  track.appendChild(first)

  const sourceWidth = first.scrollWidth || 1
  let loops = 0
  while (track.scrollWidth < window.innerWidth * 2 && loops < 8) {
    track.appendChild(source.cloneNode(true))
    loops += 1
  }

  track.style.setProperty('--marquee-shift', `${sourceWidth}px`)
  requestAnimationFrame(() => track.classList.add('is-ready'))

}

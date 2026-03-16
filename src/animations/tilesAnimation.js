export function initTiles() {
  const TILE_SIZE = 48

  document.querySelectorAll('.section-tiles').forEach(section => {
    const grid = section.querySelector('.tiles-bg')
    if (!grid) return

    const tiles = Array.from(grid.querySelectorAll('.tile'))
    let cols = Math.floor(grid.offsetWidth / TILE_SIZE)

    const ro = new ResizeObserver(() => {
      cols = Math.floor(grid.offsetWidth / TILE_SIZE)
    })
    ro.observe(grid)

    // Remove old listener if re-init
    if (section._tilesMove) {
      section.removeEventListener('mousemove', section._tilesMove)
    }

    section._tilesMove = (e) => {
      const rect = grid.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x < 0 || y < 0) return

      const col = Math.floor(x / TILE_SIZE)
      const row = Math.floor(y / TILE_SIZE)
      const index = row * cols + col

      if (index >= 0 && index < tiles.length) {
        const tile = tiles[index]
        tile.classList.add('tile-lit')
        setTimeout(() => tile.classList.remove('tile-lit'), 1200)
      }
    }

    section.addEventListener('mousemove', section._tilesMove)
  })
}

import { t } from '../i18n/translations.js'

export function renderMarquee(lang = 'pt') {
  const items = t(lang, 'marquee_items')
  const itemsHTML = items.map(i => `<span class="marquee-item">${i}</span><span class="marquee-sep" aria-hidden="true">·</span>`).join('')
  return `
    <div class="marquee-wrapper" aria-hidden="true">
      <div class="marquee-track" id="marquee-track">
        <div class="marquee-content">${itemsHTML}</div>
      </div>
    </div>
  `
}

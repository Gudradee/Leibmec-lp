import { initScrollReveal } from './scrollReveal.js'
import { initHeroWordSplit } from './heroWordSplit.js'
import { initCounters } from './counterAnimation.js'
import { initManifestoLine } from './manifestoLine.js'
import { initMarquee } from './marqueeLoop.js'
import { initFlipCards } from '../components/FlipCard.js'
import { initNav } from '../components/NavBehavior.js'
import { initFAQ } from '../components/FAQ.js'
import { initTiles } from './tilesAnimation.js'
import { initSpotlightCards } from './spotlightCards.js'

export function initAllAnimations() {
  initScrollReveal()
  initHeroWordSplit()
  initCounters()
  initManifestoLine()
  initMarquee()
  initFlipCards()
  initNav()
  initFAQ()
  initTiles()
  initSpotlightCards()
}

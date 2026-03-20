const LANG_KEY = 'leibmec-lang'

export function getLang() {
  return localStorage.getItem(LANG_KEY) || 'pt'
}

export function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang)
}

export function hasLangPreference() {
  return localStorage.getItem(LANG_KEY) !== null
}

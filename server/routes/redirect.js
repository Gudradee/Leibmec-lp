const express = require('express')
const router = express.Router()

router.get('/instagram', (req, res) => {
  res.redirect(302, 'https://www.instagram.com/leibmec/')
})

router.get('/inscricao', (req, res) => {
  res.redirect(302, 'https://forms.gle/anKhw9pBqYVkjnqG6')
})

module.exports = router

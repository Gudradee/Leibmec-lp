const express = require('express')
const path = require('path')
const redirectRoutes = require('./routes/redirect')
const healthRoutes = require('./routes/health')

const app = express()
const PORT = process.env.PORT || 8080

// Static files from Vite build
app.use(express.static(path.join(__dirname, '../dist')))

// Routes
app.use(redirectRoutes)
app.use('/api', healthRoutes)

// SPA fallback
app.get('/processo-seletivo', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`LEIbmec server running on http://localhost:${PORT}`)
})

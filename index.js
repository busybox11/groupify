const express = require('express')
const path = require('path')
const app = express()
const port = 39900

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/app.html'));
})

app.listen(port, () => {
  console.log(`Groupify web app listening on http://localhost:${port}`)
})
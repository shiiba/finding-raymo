const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello world, I am a chat bot')
})

router.get('/webhook/', (req, res) => {
  if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
    res.sens(req.query['hub.challenge'])
  }
  res.send('Error, wrong token')
})

module.exports = router
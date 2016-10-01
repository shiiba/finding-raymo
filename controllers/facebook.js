// 'use strict'

// const express = require('express')
// const router = express.Router()
// const request = require('request')
// const token = process.env.RAYMO_KEY
// const verifyToken = 'my_voice_is_my_password_verify_me'

// const sendTextMessage = (sender, text) => {
//   const messageData = { text }
//   console.log('fb token is:', token)
//   request({
//     url: 'https://graph.facebook.com/v2.6/me/messages',
//     qs: { accessToken:token },
//     method: 'POST',
//     json: {
//       recipient: { id:sender },
//       message: messageData,
//     }
//   }, (error, response) => {
//     if (error) {
//       console.log('Error sending messages: ', error)
//     } else if (response.body.error) {
//       console.log('Error: ', response.body.error)
//     } else {
//       console.log('Response: ', response)
//     }
//   })
// }

// router.get('/', (req, res) => {
//   res.send('Hello world, I am a chat bot')
// })

// router.get('/webhook/', (req, res) => {
//   if (req.query['hub.verify_token'] === verifyToken) {
//     res.send(req.query['hub.challenge'])
//   }
//   res.send('Error, wrong token')
// })

// router.post('/webhook/', (req, res) => {
//   console.log('hitting webhook post route')
//   const messagingEvents = req.body.entry[0].messaging
//   for (let i = 0; i < messagingEvents.length; i++) {
//     const event = req.body.entry[0].messaging[i]
//     const sender = event.sender.id
//     console.log('sender is:', sender)
//     if (event.message && event.message.text) {
//       const text = event.message.text
//       console.log('about to call sendTextMessage function')
//       sendTextMessage(sender, 'Text received, echo: ' + text.substring(0, 200))
//     }
//   }
//   res.sendStatus(200)
// })

// module.exports = router
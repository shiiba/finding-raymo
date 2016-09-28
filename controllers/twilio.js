"use strict"

const express = require('express')
const router = express.Router()
// const twilio = require('twilio')

// Twilio creds
const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
// const testAccountSid = process.env.TWILIO_TEST_SID
// const testAuthToken= process.env.TWILIO_TEST_AUTH_TOKEN

// // require Twilio module
const client = require('twilio')(accountSid, authToken)


router.post('/', (req, res) => {
  // Wil respond to you
  // const twiml = new twilio.TwimlResponse()
  // twiml.message('The Robots are coming! Head for the hills!')
  // res.writeHead(200, {'Content-Type': 'text/xml'})
  // res.end(twiml.toString())

  client.messages.create({
    to: '+19163160342',
    from: '+18474439729',
    body: 'Test message, yo'
  }, (err, message) => {
    console.log(message.sid)
  })

})

module.exports = router
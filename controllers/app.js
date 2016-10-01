'use strict'

const express = require('express'),
  router = express.Router()

// ==========
// TWILIO
// ==========

// Twilio creds
// const accountSid = process.env.TWILIO_SID
// const authToken = process.env.TWILIO_AUTH_TOKEN
const accountSid = 'ACa7aff1d7d2e772eac0b0a4d5228f888f'
const authToken = 'f4662525b8b264f3a37221602ba094a8'

// // require Twilio module
const client = require('twilio')(accountSid, authToken)

// ==========
// MAILJET
// ==========

const mailjetApiKey = process.env.MAILJET_API_KEY
const mailjetSecret = process.env.MAILJET_SECRET_KEY

const Mailjet = require('node-mailjet').connect(mailjetApiKey, mailjetSecret)

const handleError = (err) => {
  throw new Error(err.ErrorMessage);
}

const handlePostResponse = (response) => {
  console.log(response)
}

router.post('/', (req, res) => {
  const messageBody = req.body
  const messageText = messageBody.Body
  console.log('messageText:', messageText)

  client.messages.create({
    to: '+15163870554',
    from: '+18474439729',
    body: messageText
  }, (err, message) => {
    console.log(message)
  })

  const sendEmail = Mailjet.post('send')

  const emailData = {
    'FromEmail': 'finding.raymond@gmail.com',
    'FromName': 'Eri Berry',
    'Subject': messageText,
    'Recipients': [{'Email': 'milly.egawa@gmail.com'}]
  }

  const emailData2 = {
    'FromEmail': 'finding.raymond@gmail.com',
    'FromName': 'Eri Berry',
    'Subject': messageText,
    'Recipients': [{'Email': 'kshiiba@gmail.com'}]
  }

  sendEmail
    .request(emailData)
    .then(handlePostResponse)
    .catch(handleError)

  sendEmail
    .request(emailData2)
    .then(handlePostResponse)
    .catch(handleError)

  // Will respond to you
  // const twiml = new twilio.TwimlResponse()
  // twiml.message('The Robots are coming! Head for the hills!')
  // res.writeHead(200, {'Content-Type': 'text/xml'})
  // res.end(twiml.toString())

  // Conditional Replies
  // const twiml = new twilio.TwimlResponse()
  // if (req.body.Body == 'hello') {
  //   twiml.message('Hi!')
  // } else if(req.body.Body == 'bye') {
  //   twiml.message('Goodbye')
  // } else {
  //   twiml.message('No Body param match, Twilio sends this in the request to your server.')
  // }
  // res.writeHead(200, {'Content-Type': 'text/xml'})
  // res.end(twiml.toString())
})
module.exports = router
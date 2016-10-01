'use strict'

const express = require('express'),
  router = express.Router()

// ==========
// TWILIO
// ==========

// Twilio creds
const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

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
  console.log('messageBody:', messageBody)
  console.log('messageText:', messageText)

  if (messageBody.From === '+15165870554') {
    client.messages.create({
      to: '+19163160342',  // change this to RAY
      from: '+18474439729',
      body: messageText
    }, (err, message) => {
      console.log(message)
    })
  } else {
    // client.messages.create({
    //   to: '+19163160342',  // change this to RAY
    //   from: '+18474439729',
    //   body: messageText
    // }, (err, message) => {
    //   console.log(message)
    // })

    const sendEmail = Mailjet.post('send')

    const emailData = {
      'FromEmail': 'finding.raymond@gmail.com',
      'FromName': 'Eri Berry',
      'Subject': messageText,
      'Recipients': [{'Email': 'kshiiba@gmail.com'}] // change this to RAY
    }

    const emailData2 = {
      'FromEmail': 'finding.raymond@gmail.com',
      'FromName': 'Eri Berry',
      'Subject': messageText,
      'Recipients': [{'Email': 'kshiiba@gmail.com'}]  // change this to RAY
    }

    sendEmail
      .request(emailData)
      .then(handlePostResponse)
      .catch(handleError)

    // sendEmail
    //   .request(emailData2)
    //   .then(handlePostResponse)
    //   .catch(handleError)
  }
})
module.exports = router
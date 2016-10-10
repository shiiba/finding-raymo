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

const rayPhone = process.env.RAY_PHONE
const eriPhone = process.env.ERI_PHONE
const raymoPhone = process.env.FINDING_RAYMO_PHONE

// ==========
// MAILJET
// ==========

const mailjetApiKey = process.env.MAILJET_API_KEY
const mailjetSecret = process.env.MAILJET_SECRET_KEY

const Mailjet = require('node-mailjet').connect(mailjetApiKey, mailjetSecret)

const rayEmail = process.env.RAY_EMAIL
const raymoEmail = process.env.FINDING_RAYMO_EMAIL

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

  if (messageBody.From === rayPhone) {
    client.messages.create({
      to: eriPhone,
      from: raymoPhone,
      body: messageText
    }, (err, message) => {
      console.log(message)
    })
  } else {
    client.messages.create({
      to: rayPhone,
      from: raymoPhone,
      body: messageText
    }, (err, message) => {
      console.log(message)
    })

    const sendEmail = Mailjet.post('send')

    const emailData = {
      'FromEmail': raymoEmail,
      'FromName': 'Eri Berry',
      'Subject': messageText,
      'Recipients': [{'Email': rayEmail}]
    }

    // const emailData2 = {
    //   'FromEmail': raymoEmail,
    //   'FromName': 'Eri Berry',
    //   'Subject': messageText,
    //   'Recipients': [{'Email': }]  // change this to RAY BIZ EMAIL
    // }

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
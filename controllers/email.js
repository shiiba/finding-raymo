// 'use strict'

// const express = require('express'),
//   router = express.Router()

// const mailjetApiKey = process.env.MAILJET_API_KEY
// const mailjetSecret = process.env.MAILJET_SECRET_KEY

// const Mailjet = require('node-mailjet').connect(mailjetApiKey, mailjetSecret)

// const sendEmail = Mailjet.post('send')

// const emailData = {
//   'FromEmail': 'finding.raymond@gmail.com',
//   'FromName': 'Eri Berry',
//   'Subject': 'Test with the NodeJS Mailjet wrapper',
//   'Text-part': 'Hello NodeJs !',
//   'Recipients': [{'Email': 'kshiiba@gmail.com'}]
// }

// const handleError = (err) => {
//   throw new Error(err.ErrorMessage);
// }

// const handlePostResponse = (response) => {
//   console.log(response)
// }

// // sendEmail
// //   .request(emailData)
// //   .then(handlePostResponse)
// //   .catch(handleError)

// module.exports = router

'use strict'

// Requirements
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

// Middleware
const app = express()
const port = process.env.PORT || 3000
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Database

// Controllers
const mainAppController = require('./controllers/app.js')
app.use('/main', mainAppController)

// const facebookController = require('./controllers/facebook.js')
// app.use('/fb', facebookController)

// const smsController = require('./controllers/twilio.js')
// app.use('/sms', smsController)

// const emailController = require('./controllers/email.js')
// app.use('/email', emailController)

// Listen
app.listen(port)
console.log('==============')
console.log('listening on port ' + port)
console.log('==============')

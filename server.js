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
const facebookController = require('./controllers/facebook.js')
app.use('/fb', facebookController)

// Listen
app.listen(port)
console.log('==============')
console.log('listening on port ' + port)
console.log('==============')

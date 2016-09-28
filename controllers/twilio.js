// Twilio creds
// const accountSid = process.env.TWILIO_SID
// const authToken = process.env.TWILIO_AUTH_TOKEN
const testAccountSid = process.env.TWILIO_TEST_SID
const testAuthToken= process.env.TWILIO_TEST_AUTH_TOKEN

// require Twilio module
const client = require('twilio')(testAccountSid, testAuthToken)

client.messages.create({
  to: '+19163160342',
  from: '+18474439729',
  body: 'Test message, yo'
}, (err, message) => {
  console.log(message.sid)
})

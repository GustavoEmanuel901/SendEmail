const path = require('path')
const nodeMailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

const transporter = nodeMailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

transporter.use('compile', hbs({
  viewEngine: {
    defaultLayout: undefined,
    partialsDir: path.resolve('./src/mails/templates')
  },
  viewPath: path.resolve('./src/mails/templates'),
  extName: '.html'
}))

module.exports = transporter

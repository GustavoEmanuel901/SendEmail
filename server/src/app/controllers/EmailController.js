const { uuid } = require('uuidv4')
const { Op } = require('sequelize')

const transporter = require('../../mails/sendEmail')
const Attachment = require('../models/Attachment')
const Email = require('../models/Email')
const User = require('../models/User')

module.exports = {
  async index(req, res){
    const user_id = req.headers.authorization
    const { page, search } = req.query

    try {

      const user = await User.findByPk(user_id)

      if(!user) {
        return res.status(401).json({message: 'Unauthorized user'})
      }

      const emails = await Email.findAndCountAll({
        where: {  
          user_id,
          [Op.or]: {
            to: {
              [Op.iLike]: `%${search}%`
            },
            subject: {
              [Op.iLike]: `%${search}%`
            },
          }
        },
        limit: 6,
        offset: (page - 1) * 10,
        order: [
          ['created_at', 'DESC'],
        ]
      })

      res.header('X-Total-Count', emails.count)

      return res.status(200).json(emails.rows)
    } catch (error) {
      return res.status(400).json({ message: 'Error to list emails, try again'})
    }
  },

  async detail(req, res){
    const { id } = req.params
    const user_id = req.headers.authorization

    try {
      const user = await User.findByPk(user_id)

      if(!user) {
        return res.status(404).json({ message: 'User Not Found'})
      }

      const email = await Email.findByPk(id, {
        include: 'attachments'
      })

      if(!email) {
        return res.status(400).json({ message: 'Email Not Found' })
      }

      return res.status(200).json(email)

    } catch (error) {
      return res.status(500).json({ message: 'Server Internal Error'})
    }
  },

  async create (req, res) {
    const { to, subject, text } = req.body
    const user_id = req.headers.authorization
    const files = req.files

    try {

      const user = await User.findByPk(user_id)

      if(!user) {
        return res.status(401).json({message: 'Unauthorized user'})
      }

      await transporter.sendMail({
        to,
        from: 'cda57f68b483d2',
        subject,
        template: 'email',
        context: { text },
        attachments: files.map(file => {
          return {
            name: file.originalname,
            contentType: file.contentType,
            path: file.location
          }
        })
      }, err => {
        if (err) {
          return res.status(400).json({ error: 'error sending email, try again' })
        }
      })
  
      const id = uuid()
  
      await Email.create({
        id,
        to,
        subject,
        body: text,
        user_id
      })
  
  
      if(files) {
        files.map(async file => {
          const file_id = uuid()
  
          await Attachment.create({
            id: file_id,
            name: file.originalname,
            size: file.size,
            key: file.key,
            url: file.location,
            email_id: id
          })
        })
      }
  
      return res.status(201).json({ message: 'Email successfully sent' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Server Error'})
    }
  },

  async delete(req, res) {

    const user_id = req.headers.authorization
    const { id } = req.params

    try {

      const user = await User.findByPk(user_id)

      if(!user) {
        return res.status(404).json({ message: 'User Not Found'})
      }

      const email = await Email.findByPk(id)

      if(!email) {
        return res.status(400).json({ message: 'Email Not Found' })
      }

      await email.destroy()

      return res.status(200).json({ message: 'Email Deleted successfully' })
    } catch (error) {
      return res.status(500).json({ message: 'Server Internal Error'})
    }
  }
}

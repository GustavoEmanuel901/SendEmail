const bcrypt = require('bcryptjs')
const { uuid } = require('uuidv4')

const User = require('../models/User')
// const generateToken = require('../../utils/generateToken')

module.exports = {
  async session (req, res) {
    const { user_name, password } = req.body

    try {
      const user = await User.findOne({
        where: { user_name }
      })

      if (!user) {
        return res.status(400).send({ error: 'User not Found' })
      }

      if (!await bcrypt.compare(password, user.password_hash)) {
        return res.status(400).send({ error: 'Invalid password' })
      }

      return res.status(200).json({ 
        user_id: user.id,
        message: 'Login Successfully',
        // token: generateToken({ id: user.id }) 
      })

    } catch (error) {
      return res.status(400).send({ error: 'Login failed, try again' })
    }
  },

  async create (req, res) {
    const { name, user_name, password, keyword } = req.body

    try {

      if(keyword !== process.env.SECRET_KEYWORD) {
        return res.status(401).json({ message: 'Invalid Keyword'})
      }
    
      const usernameAlreadyExists = await User.findOne({ where: { user_name } })

      if (usernameAlreadyExists) {
        return res.status(406).json({ message: 'User already exists' })
      }

      const id = uuid()

      const password_hash = await bcrypt.hash(password, 8)

      const data = {
        id,
        name,
        user_name,
        password_hash
      }

      const user = await User.create(data)

      return res.status(201).json({ 
        message: 'User created successfully',
        user_id: user.id,
        // token: generateToken({ id: user.id }) 
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Server error'})
    }
  }
}

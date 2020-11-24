require('dotenv').config()

const routes = require('express').Router()
const { celebrate, Segments, Joi } = require('celebrate')
const multer = require('multer')

const multerConfig = require('./config/multer')
const auth = require('./app/middlewares/auth')
const EmailController = require('./app/controllers/EmailController')
const UserController = require('./app/controllers/UserController')

require('./database')

routes.post('/email', multer(multerConfig).array('files'), EmailController.create)
routes.get('/email', EmailController.index)
routes.get('/email/:id', EmailController.detail)
routes.delete('/email', EmailController.delete)

routes.post('/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        user_name: Joi.string().required().max(20),
        password: Joi.string().required().min(8),
        keyword: Joi.string().required(),
    })
}), UserController.create)

routes.post('/session', UserController.session)

module.exports = routes

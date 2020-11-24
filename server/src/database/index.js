const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../app/models/User')
const Email = require('../app/models/Email')
const Attachment = require('../app/models/Attachment')

const connection = new Sequelize(dbConfig)

User.init(connection)
Email.init(connection)
Attachment.init(connection)

User.associate(connection.models)
Email.associate(connection.models)
Attachment.associate(connection.models)

module.exports = connection

const { Model, DataTypes } = require('sequelize')

class Email extends Model {
  static init (sequelize) {
    super.init({
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      to: DataTypes.STRING,
      subject: DataTypes.STRING,
      body: DataTypes.TEXT
    },
    {
      sequelize
    })
  }

  static associate (model) {
    this.belongsTo(model.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
    this.hasMany(model.Attachment, {
      foreignKey: 'email_id',
      as: 'attachments'
    })
  }
}

module.exports = Email

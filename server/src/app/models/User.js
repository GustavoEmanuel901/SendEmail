const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init({
      id: {
        primaryKey: true,
        type: DataTypes.STRING
      },
      name: DataTypes.STRING,
      user_name: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING
    },
    {
      sequelize
    })
  }

  static associate (model) {
    this.hasMany(model.Email, {
      foreignKey: 'user_id',
      as: 'emails'
    })
  }
}

module.exports = User

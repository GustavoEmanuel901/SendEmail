const { Model, DataTypes } = require('sequelize')

class Attachment extends Model {
  static init (sequelize) {
    super.init({
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      name: DataTypes.STRING,
      size: DataTypes.FLOAT,
      key: DataTypes.STRING,
      url: DataTypes.STRING
    },
    {
      sequelize
    })
  }

  static associate (model) {
    this.belongsTo(model.Email, {
      foreignKey: 'email_id',
      as: 'emailAttachent'
    })
  }
}

module.exports = Attachment

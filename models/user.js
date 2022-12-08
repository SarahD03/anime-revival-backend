'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Posts, {
        foreignKey: 'owner_id',
        as: 'posts',
        onDelete: 'CASCADE',
        onDelete: 'CASCADE'
      })
      User.hasMany(models.Comment, {
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASACDE'
      })
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profileImage: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}

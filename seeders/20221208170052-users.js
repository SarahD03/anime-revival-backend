'use strict'
const falso = require('@ngneat/falso')
const users = [...Array(3)].map(() => ({
  userName: falso.randUserName(),
  passwordDigest: falso.randPassword(),
  profileImage: falso.randImg(),
  createdAt: new Date(),
  updatedAt: new Date()
}))
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', users)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users')
  }
}

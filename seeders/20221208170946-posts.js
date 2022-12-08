'use strict'
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const posts = await Promise.all(
      [...Array(4)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        return {
          description: falso.randParagraph(),
          image: falso.randImg(),
          owner_id: user.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('posts', posts)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('posts')
  }
}

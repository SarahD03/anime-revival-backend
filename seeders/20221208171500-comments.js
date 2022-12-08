'use strict'
const { User, Posts, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const comments = await Promise.all(
      [...Array(2)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let post = await Posts.findOne({
          order: sequelize.random(),
          where: { ownerId: { [Op.not]: user.id } },
          raw: true
        })
        return {
          content: falso.randParagraph(),
          owner_id: user.id,
          post_id: post.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('comments', comments)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments')
  }
}

const { User, Posts } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userProfile = await User.findByPk(req.params.user_id, {
      include: [{ model: Posts, as: 'posts' }]
    })
    res.send(userProfile)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  GetUserProfile
}

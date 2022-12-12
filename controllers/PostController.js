const { User, Posts, Comment } = require('../models')

const GetAllPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll({
      include: [{ model: User, as: 'owner', attributes: ['userName'] }]
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetPostDetails = async (req, res) => {
  try {
    const post = await Posts.findByPk(req.params.post_id, {
      include: [{ model: Comment, User, as: 'comments' }]
      //   include: [{ model: User, as: 'owner', attributes: ['userName'] }]
    })

    res.send(post)
  } catch (error) {
    throw error
  }
}

const CreateAPost = async (req, res) => {
  try {
    // let ownerId = parseInt(req.params.user_id)
    // let post = {
    //   ownerId,
    //   ...req.body
    // }
    const createPost = await Posts.create({ ...req.body })
    res.send(createPost)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    let updatedPost = await Posts.update(req.body, {
      where: { id: postId },
      returning: true
    })
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    // vv finding the id of the twert that is getting deleted
    let postId = parseInt(req.params.post_id)
    await Posts.destroy({ where: { id: postId } })
    res.send({ message: `Deleted post : ${postId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllPosts,
  CreateAPost,
  GetPostDetails,
  UpdatePost,
  DeletePost
}

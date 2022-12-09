const { Comment, Posts } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: [{ model: Posts, as: 'comments', attributes: ['id'] }]
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetCommentsById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.owner_id)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.owner_id)
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId }
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}
const CreateComments = async (req, res) => {
  try {
    let commentBody = {
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}
const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.owner_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted comment with an id of ${commentId}` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetComments,
  GetCommentsById,
  UpdateComment,
  DeleteComment,
  CreateComments
}

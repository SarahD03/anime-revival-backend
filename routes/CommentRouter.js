const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/all', controller.GetComments)
Router.get('/:owner_id', controller.GetCommentsById)
Router.put('/:owner_id', controller.UpdateComment)
Router.post('/:owner_id', controller.CreateComments)
Router.delete('/:owner_id', controller.DeleteComment)

module.exports = Router

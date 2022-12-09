const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/all', controller.GetAllPosts)
Router.get('/:post_id', controller.GetPostDetails)
Router.post('/:user_id', controller.CreateAPost)
Router.put('/:post_id', controller.UpdatePost)
Router.delete('/:post_id', controller.DeletePost)

module.exports = Router

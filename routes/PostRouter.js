const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

Router.get('/all', controller.GetAllPosts)
Router.get('/:post_id', controller.GetPostDetails)
Router.post(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateAPost
)
Router.put(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)
Router.delete(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)

module.exports = Router

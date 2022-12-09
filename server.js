const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const UserRouter = require('./routes/UserRouter')
const PostRouter = require('./routes/PostRouter')
const CommentRouter = require('./routes/CommentRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

//routes
app.use('/auth', AuthRouter)
app.use('/users', UserRouter)
app.use('/posts', PostRouter)
app.use('/comments', CommentRouter)

app.get('/', (req, res) => res.json({ message: 'server worksss' }))
app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))

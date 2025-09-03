const express = require('express')
const authRoutes = require('./routes/auth.route')
const postRoutes = require('./routes/post.route')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth',authRoutes)
app.use('/api/posts',postRoutes)

module.exports = app
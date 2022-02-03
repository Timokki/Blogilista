const envs = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs.js')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

mongoose.connect(envs.MONGODB_URI).then(
  console.log('Mongo DB connected')
)

module.exports = app
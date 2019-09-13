const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

//middleware - so we can acces stuff outside server, and recieve/send json (MongoDB)
//app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongoose MongoDB connection database established successfully')
})

// Loading routers. If user requests /something, show somethingRouter-file
// const exercisesRouter = require('./routes/exercises')
// const usersRouter = require('./routes/users')
// app.use('/users', usersRouter)
// app.use('/exercises', exercisesRouter)

//app start listening on server.
app.listen(port, () => {
    console.log('Server is up and running on port: ', port)
})
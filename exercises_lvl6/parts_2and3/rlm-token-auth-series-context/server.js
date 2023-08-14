const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const dbUrl = process.env.MONGODB_URL
const { expressjwt } = require('express-jwt')


app.use(express.json())
app.use(morgan('dev'))

// mongoose.connect(
//   'mongodb://localhost:27017/user-authentication',
//   () => console.log('Connected to the DB')
// )
mongoose.set('strictQuery', true),
mongoose.connect(dbUrl,
    (err) => {  
        if (err) {
            console.log(err) 
            return
        }
        console.log("Connected to the DB")}
    )

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) // req.user
app.use('/api/todo', require('./routes/todoRouter.js'))

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(8000, () => {
  console.log(`Server is running on local port 8000`)
})

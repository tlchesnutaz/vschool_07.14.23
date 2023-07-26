const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const dbUrl = process.env.MONGODB_URL
const { expressjwt } = require('express-jwt')


app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true),  
mongoose.connect(dbUrl,
    (err) => {  
        if (err) {
            console.log(err) 
            return
        }
        console.log("Connected to the DB")}
)

//app.use('/api/owners', require('./routes/ownerRouter.js'))
//app.use('/auth')
app.use('/api/pets', require('./routes/petRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log('The server is running on Port 8000')
})


const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')
require('dotenv').config()
const dbUrl = process.env.MONGODB_URL

// middleware
app.use(express.json())
app.use(morgan('dev'))

// connect to db - REPLACE with ENV later
mongoose.set('strictQuery', true),
mongoose.connect(dbUrl,
    (err) => {  
        if (err) {
            console.log(err) 
            return
        }
        console.log("Connected to the DB")}
    )

// routes
app.use("/api/bounties", require("./routes/bountyRouter.js"))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// server listen (port and callback func)
app.listen(7567, () => {
    console.log("The server is running on Port 7567")
})

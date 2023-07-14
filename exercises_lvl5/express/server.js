// First Express Server

const express = require("express")
const app = express()
const morgan = require("morgan")
// const { v4: uuidv4 } = require("uuid") move to router file
const mongoose = require('mongoose')


// Middleware (for every request) also has opt endpoint or leave 'empty' and it will fire on every request
// looks for a request body, and turns it into 'req.body'
app.use(express.json()) 
app.use(morgan("dev"))

// Connect to DB
mongoose.set('strictQuery', true),
mongoose.connect('mongodb+srv://tlchesnutaz:oUTPCEesYYWCEpK8@cluster0.2tdcwit.mongodb.net/?retryWrites=true&w=majority',
    (err) => {  
        if (err) {
            console.log(err) 
            return
        }
        console.log("Connected to the DB")}
    )

// Routes
// userRouter.get("/users", (req, res) => {res.send(users)}) 
// move this to router file, remove the 'users' to avoid redundancy
app.use("/api/users", require("./routes/userRouter.js"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen - requires two arguments:
// 1. PORT 
// 2: CallBack function
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})
    
const express = require("express")
const userRouter = express.Router()
// const { v4: uuidv4 } = require("uuid") - don't need once connected to db
const User = require('../models/user.js')


// Fake Data - don't need once connected to db
// const users = [
//     { name: "joe", age: 20, _id: uuidv4() },
//     { name: "bill", age: 26, _id: uuidv4() },
//     { name: "ali", age: 23, _id: uuidv4() },
//     { name: "peg", age: 27, _id: uuidv4() },
//     { name: "zoe", age: 24, _id: uuidv4() }
// ]

//  // Routes - requires:
//     // 1. Endpoint (mount path) (optional)
//     // 2. CallBack function (give the request and response objects, abbreviated to req, res)
// userRouter.get("/", (req, res) => {
//     res.send(users)
// })
// consolidate these using userRouter.route() 
// see the 'Express Router' lesson
// _____________________________________________________________


// Get All - with mongoAtlas/mongoose
userRouter.get("/", (req, res, next) => {
    User.find((err, user) => {
        if(err){
           res.status(500)
           return next(err) 
        }
        return res.status(200).send(user)
    })
})

// Get by filter query
userRouter.get("/search/state", (req, res, next) => {
    User.find({ state: req.query.state }, (err, users) => {
        if(err){
            res.status(500)
            return next(err) 
        }
        return res.status(200).send(users)
    })
})

// req.query vs. req.params...

// Post One - with mongoAtlas/mongoose
userRouter.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUser)
    })
})


// Update One - with mongoAtlas/mongoose
userRouter.put("/:userId", (req, res, next) => {
    User.findOneAndUpdate(
        { _id: req.params.userId }, // find this one to update
        req.body, // update the object with this data
        { new: true }, // this makes sure the updated version is sent to front-end 
        (err, updatedUser) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedUser)
        })
    })


// Delete One - with mongoAtlas/mongoose
userRouter.delete("/:userId", (req, res, next) => {
    User.findOneAndDelete(
        { _id: req.params.userId }, 
        (err, deletedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedUser.firstName} from the db`)
    })
})

module.exports = userRouter


// Get All - with local server
// userRouter.get("/", (req, res) => {
//         res.status(200) 
//         res.send(users)
//         // can chain together res.status(200).send(users)
//     })

// Get One
// userRouter.get("/:userId", (req, res, next) => {
//     const userId = req.params.userId
//     const foundUser = users.find(user => user._id === userId)
//     // console.log(foundUser) - if not found, incorrect id or whatever, then it will return undefined
//     if(!foundUser){
//         const error = new Error(`The item with id ${userId} was not found.`)
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundUser)
// })

// Get by age (a parameter)
// userRouter.get("/search/age", (req, res, next) => {
//     const age = req.query.age
//     // bc this is a number need to convert using parseInt or not use strict equality
//     if(!age){
//         const error = new Error("Please provide and age(or range) to search for.")
//         res.status(500)
//         return next(error)
//     }
//     const filteredUsers = users.filter(user => user.age == age)
//     res.status(200).send(filteredUsers)
// })

// Post One - with local server   
// userRouter.post("/", (req, res) => {
//     //console.log(req)
//         const newUser = req.body
//         newUser._id = uuidv4()
//         users.push(newUser)
//         // or can just write: users.push(req.body)
//         // res.send(`Successfully added ${newUser.name} to the db`)
//         res.status(201).send(newUser)
//     })

// Update One - with local server
// userRouter.put("/:userId", (req, res) => {
//     const userId = req.params.userId
//     const userIndex = users.findIndex(user => user._id === userId)
//     const updatedUser = Object.assign(users[userIndex], req.body)
//     res.status(201).send(updatedUser)
// })

// Delete One - with local server
// userRouter.delete("/:userId", (req, res) => {
//     const userId = req.params.userId
//     const userIndex = users.findIndex(user => user._id === userId)
//     users.splice(userIndex, 1)
//     res.send("User sucessfully deleted!")
// })
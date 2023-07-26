const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

// Signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        // if there is no matching user will return null
        if(user){ // if user is truthy
            res.status(403)
            return next(new Error('username is already taken'))
        } // else create new user
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
           if(err){
            res.status(500)
            return next(err)
           }
                                  // payload        // secret
           const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
           return res.status(201).send({ token, user: savedUser })
        })
    })
})
// Login
authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error("username or password are incorrect"))
        }
        if(req.body.password !== user.password){
            res.status(403)
            return next(new Error("username or password are incorrect"))
        }
                                //creates a user obj that has all the props of the user
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({ token, user })
    })
})

module.exports = authRouter
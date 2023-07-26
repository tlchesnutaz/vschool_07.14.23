const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

// Get All Todos (regardless of user)
todoRouter.get("/", (req, res, next) => {
  Todo.find((err, todos) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})

// Get Todos by User Id
todoRouter.get("/user", (req, res, next) => {
  Todo.find({ user: req.auth._id }, (err, todos) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})

// Add New Todo
todoRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newTodo = new Todo(req.body)
  newTodo.save((err, savedTodo) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedTodo)
  })
})

// Delete Todo
todoRouter.delete("/:todoId", (req, res, next) => {
  Todo.findOneAndDelete(
    { _id: req.params.todoId, user: req.auth._id },
    (err, deletedTodo) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete todo: ${deletedTodo.title}`)
    }
  )
})

// Update Todo
todoRouter.put("/:todoId", (req, res, next) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedTodo) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedTodo)
    }
  )
})

module.exports = todoRouter
const express = require("express")
const petRouter = express.Router()
const Pet = require("../models/pet.js")


// Get all pets
petRouter.get("/", (req, res, next) => {
  Pet.find((err, pet) => {
    if (err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(pet)
  })
})

// Get pets by owner
petRouter.get("/:ownerId", (req, res, next) => {
    Pet.find({ owner: req.params.ownerId }, (err, pets) => {
        if (err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(pets)  
    })
})

// Add pet (with connected ownerId)
petRouter.post("/:ownerId", (req, res, next) => {
  // req.body.owner = req.params.ownerId
  const newPet = new Pet(req.body)
  newPet.save((err, savedPet) => {
    if (err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedPet)
  })
  //res.send( `Successfully added ${newpet.petName} to the db` )
})

// Update pet
petRouter.put("/:petId", (req, res, next) => {
  Pet.findOneAndUpdate(
    { _id: req.params.petId },
    req.body,
    { new: true },
    (err, updatedPet) => {
      if (err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedPet)
    }
  )
})

// Delete pet
petRouter.delete("/:petId", (req, res, next) => {
  Pet.findOneAndDelete(
    { _id: req.params.petId }, 
    (err, deletedPet) => {
      if (err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted ${deletedPet.petName} from the DB`)
  })
})

module.exports = petRouter

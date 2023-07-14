const express = require("express");
const ownerRouter = express.Router();
const Owner = require("../models/owner.js");

ownerRouter.get("/", (req, res, next) => {
  Owner.find((err, owner) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(owner)
  })
})

ownerRouter.post("/", (req, res, next) => {
  const newOwner = new Owner(req.body);
  newOwner.save((err, savedOwner) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedOwner)
  })
  //res.send( `Successfully added ${newuser.firstName} to the db` )
})

ownerRouter.put("/:ownerId", (req, res, next) => {
  Owner.findOneAndUpdate(
    { _id: req.params.ownerId },
    req.body,
    { new: true },
    (err, updatedOwner) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedOwner)
    }
  )
})

ownerRouter.delete("/:ownerId", (req, res, next) => {
  Owner.findOneAndDelete({ _id: req.params.ownerId }, (err, deletedOwner) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res
      .status(200)
      .send(`Successfully deleted ${deletedOwner.firstName} from the DB`)
  })
})

module.exports = ownerRouter

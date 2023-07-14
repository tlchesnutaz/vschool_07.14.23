const express = require("express")
const bountyRouter = express.Router()
//const { v4: uuidv4 } = require("uuid")
const Bounty = require('../models/bounty.js')


// bountyRouter.route("/") 

bountyRouter.get("/", (req, res, next) => { 
    Bounty.find((err, bounty) => {
        if(err){
           res.status(500)
           return next(err) 
        }
        return res.status(200).send(bounty)    
    })    
})

bountyRouter.post("/", (req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
        //res.send( `Successfully added ${newBounty.firstName} to the db` )
    })

bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId },
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)    
        })
    })

bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete(
        {_id: req.params.bountyId},
        (err, deletedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedBounty.firstName} from the DB`)
        })
    })

module.exports = bountyRouter

// const bounties = [
//     { 
//         firstName: "darth",
//         lastName: "maul",
//         bounty_flan: 50000,
//         type: "sith",
//         living: "deceased",
//         _id: uuidv4()
//     },
//     { 
//         firstName: "quinlan",
//         lastName: "vos",
//         bounty_flan: 60000,
//         type: "jedi",
//         living: "alive",
//         _id: uuidv4()
//     },
//     { 
//         firstName: "darth",
//         lastName: "traya",
//         bounty_flan: 40000,
//         type: "sith",
//         living: "alive",
//         _id: uuidv4()
//     },
//     { 
//         firstName: "even",
//         lastName: "piell",
//         bounty_flan: 30000,
//         type: "jedi",
//         living: "deceased",
//         _id: uuidv4()
//     },
//     { 
//         firstName: "zinn",
//         lastName: "toa",
//         bounty_flan: 65000,
//         type: "jedi",
//         living: "unknown",
//         _id: uuidv4()
//     },
//     { 
//         firstName: "thongla",
//         lastName: "jur",
//         bounty_flan: 90000,
//         type: "unknown",
//         living: "alive",
//         _id: uuidv4()
//     }
// ]
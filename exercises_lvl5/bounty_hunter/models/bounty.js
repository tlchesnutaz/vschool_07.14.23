const mongoose = require('mongoose')
const Schema = mongoose.Schema

// bounty blueprint

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    bounty_flan: {
        type: Number,
        required: true
    },
    type: String,
    living: String,
})

module.exports = mongoose.model("Bounty", bountySchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// User Blueprint
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowerCase: true
    },
    lastName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        upperCase: true,
        enum: statesArray 
        // this will only allow entry of specific value to minimize data errors 
    },
    age: Number
})

module.exports = mongoose.model("User", userSchema)
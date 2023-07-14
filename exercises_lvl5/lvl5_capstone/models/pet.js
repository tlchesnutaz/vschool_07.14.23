const mongoose = require('mongoose')
const { ObjectId } = require('mongoose')
const Schema = mongoose.Schema


const typeArr = ['amphibian', 'bird', 'cat', 'dog', 'fish', 'horse', 'reptile', 'small mammal'];

const petSchema = new Schema({
    petName: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true,
        lowercase: true,
        enum: typeArr
    },
    specific: { // for specific breed or type
        type: String,
        required: true
    }, 
    dob: Date,
    acquired: Date,
    gender: String,
    neutered: String,
    chipNum: String,
    lastVac: Date,
    vetName: String,
    vetPhone: String,
    //   validate: {
    //     validator: function(v) {
    //         return /\d{3}-\d{3}-\d{4}/.test(v);
    //     },
    //     message: 'Please enter a valid phone number :)'
    //   },
    //   required: [true, 'Phone number required']
    notes: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Owner",
        required: true
    },
    // is this correct??? this will be what links owner and pets
    // "type" should be Schema.Types.ObjectId and "ref" should point to the 
    // "ModelName" you choose when using mongoose.model("ModelName", modelSchema)
    
    // petPic: {
    //     data: Buffer,
    //     contentType: String
    // } 
    // how do I do this??? user uploads petpic, it gets displayed on pet page... 
    // how to upload? where? from form? where to save it? how to access and display it?  
    
})

module.exports = mongoose.model("Pet", petSchema)
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const farmerSchemas = new mongoose.Schema({
    fname: {
        type: String,
        // required: true
    },
    lname: {
        type: String,
        // required: true
    },
    bday: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true
    },
    mobileno: {
        type: Number,
        // required: true
    },

    email: {
        type: String,
        required: true
    },
    state: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    pincode: {
        type: Number,
        // required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        // required: true
    }

})
module.exports = mongoose.model('farmerdata', farmerSchemas)
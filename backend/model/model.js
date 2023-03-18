const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
 
    _id : {
        required: true,
        type: Number
    },
    title: {
        required: true,
        type: String
    },
    description : {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    price : {
        required: true,
        type: Number
    },
    image : {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)

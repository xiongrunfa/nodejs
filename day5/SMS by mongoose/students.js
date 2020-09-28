var mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/itcast')

var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    age: {
        type: Number,
        required: true
    },
    hobbies: {
        type: String,
    }
})

module.exports = mongoose.model('Student', studentSchema)
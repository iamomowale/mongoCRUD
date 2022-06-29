const mongoose = require('mongoose')
const Schema = mongoose.Schema

const toDoSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
}, {timestamps: true})

const toDo = mongoose.model('toDo', toDoSchema)

module.exports = toDo
const { response } = require('express')
const toDo = require('../models/toDoModels')

//Show all TO DO list
const index = (req, res, next) => {
    toDo.find()
    .then(response => {
        res.status(200).json({
            response
        })
    })
    .catch(error => {
        res.status(400).json({
            message: `An error occured! ${error}`
        })
    })
}

//Showing single todoList
const showSingleToDo = (req, res, next) => {
    let todoID = req.params.id
    toDo.findById(todoID)
    .then(response => {
        res.status(200).json({
            response
        })
    })
    .catch(error => {
        res.status(400).json({
            message: `An error occured! ${error}`
        })
    })
}

//Add a toDo to the list
const addToDo = (req, res, next) => {
    let todo = new toDo({
        title: req.body.title,
        description: req.body.description       
    })
    todo.save()
    .then(response => {
        res.status(200).json({
            message: 'ToDo addeed successfully'
        })
    })
    .catch(error => {
        res.status(400).json({
            message: `An error occured! ${error}`
        })
    })
}

//Update a toDo by todo ID
const updateToDo = (req, res, next) => {
    const todoID = req.params.id

    let updated = {
        title: req.body.title,
        description: req.body.description              
    }
    toDo.findByIdAndUpdate(todoID, {$set: updated})
    .then(() => {
        res.status(200).json({
            message: 'Todo updated successfully!'
        })
    })
    .catch(error => {
        res.status(400).json({
            message: `An error occured! ${error}`
        })
    })
}

//Delete a toDo
const deleteTodo = (req, res, next) => {
    const todoID = req.params.id
    toDo.findByIdAndRemove(todoID)
    .then(() => {
       res.status(200).json({
        message: 'Todo deleted successfully!'
       }) 
    })
    .catch(error => {
        res.status(400).json({
            message: `An error occured! ${error}`
        })
    })
}

module.exports = {
    index, showSingleToDo, addToDo, updateToDo, deleteTodo
}
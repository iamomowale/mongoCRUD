const express = require('express')
const router = express.Router()

const todoController = require('../controllers/toDoController')
//Setting each router 
router.get('/', todoController.index) //Index page display all our current TODO list
router.get('/show/:id', todoController.showSingleToDo) //To show single TODO by its id
router.post('/add', todoController.addToDo) //Add TODO to the list
router.post('/update/:id', todoController.updateToDo) //Update a TODO with its id
router.post('/delete/:id', todoController.deleteTodo) //Delete a TODO by its Id

//Exporting TODO router
module.exports = router
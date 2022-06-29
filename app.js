const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const todoRoute = require('./routes/toDoRoutes')

//Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/toDodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
//If error while connecting to DB
db.on('error', (err) => {
    console.log(err)
})
//On successfully connected to MongoDB
db.once('open', ()=> {
    console.log('Database Connection Established!')
})
//Instantiating the express app
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//Getting port number from .env file
const PORT = process.env.PORT || 6000
//Linsten via the port
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/todo', todoRoute)
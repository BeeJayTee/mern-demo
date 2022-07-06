const express = require('express')
const { connect } = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8000
const connectDB = require('./config/db')

// connect database
connectDB()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})
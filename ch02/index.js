// SETUP BABEL WITH EXPRESS JS 

// since we would be writing the ES6 Javascript code , but the may or may not understand it 
// so to make it comaptible we setup baabel along with express.js







// const express = require('express')
import express from 'express'


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello dost!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
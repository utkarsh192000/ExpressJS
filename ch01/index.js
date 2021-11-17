
// const express = require('express')
// it was done in CommonJS

import express from 'express'
// to import as per new ES6 standard , use this way 


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Utkarsh !')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
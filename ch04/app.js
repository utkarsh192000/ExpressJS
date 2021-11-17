// First Express Js application

// const express=require('express')
// as written in Traditional JavaScript standard

import express from 'express'
// import express module 

const app = express();
// express function return a app , which will later be used as callback to handle different request

const port = process.env.PORT || '3000'
// set a port which would be taken from env ; if not available , then set it to 3000


app.get('/', (req, res) => {
    res.send("Hello World");
    // we are sending a string response 
});
// made a root route 
// .get() method takes two argument 1) route 2) a callback(req,res)


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
// use .listen() method which takes port and a function

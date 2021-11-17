

import express from 'express'
// imported express module 

import web from './routes/web.js'
// imported whatever written in web.js as web , so that we can use it here 

const app=express();
// created a instance of express 

const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000



app.use('/',web);
// used web ; so that we get connceted to router 
// http://localhost:3000/ would result the Home page 
// http://localhost:3000/about would result in about page 




app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 

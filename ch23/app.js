
import express from 'express'
// imported express module

import cookieParser from 'cookie-parser';
// import cookie middleware 

import web from './routes/web.js'
// import from routes so tat it could be used 

const app=express();
// created a instance of express 

const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000


// Cookie Parser
app.use(cookieParser());
// use the cookie middleware


// LOAD ROUTES 
app.use('/',web);


app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 


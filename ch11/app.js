import express from 'express'
// imported express module 

import web from './routes/web.js'
// import from routes 

import {join } from 'path'
// we can make setting the path for static file more absolute using join 

const app=express();
// created a instance of express 

const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000


// STATIC FILES  

// app.use(express.static('public'))
// use the static files that are stored in public 
// all content inside is availble to use 
// it has already defined the path till puublic what we need to do  is that just path ahead of it in those places 


// app.use(express.static(join(process.cwd(),'public')))
// // it will also do the same thing just we have made path more dynamic 
// console.log(join(process.cwd(),'public'))

app.use('/static',express.static(join(process.cwd(),'public')))
// it will set the virtual path along with static ; so that we know that these files are static
// now thing wont work if dont access the like /static/css/style.css  





// LOAD ROUTES 

app.use('/',web);
// use the web imported from routes 





app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 


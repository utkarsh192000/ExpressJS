import express from 'express'
// imported express module 

import mongoose from 'mongoose';
// import mongoose module 

import connectDB from './db/connectdb.js';
// imported connectDB function , so that we can use it 

const app=express();
// created a instance of express 

const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000

const DATABASE_URL="mongodb://localhost:27017/schooldb"

// DATABASE CONNECTION 

// mongoose.connect("mongodb://localhost:27017/test")
// since it returns a promise , we can use then  

// mongoose.connect("mongodb://localhost:27017/test").then(()=>{
//     console.log("Connected Successfully!!!")
// });
// But this is not the most efficient way to make the project as it would make app.js file more complex 
// NOTE: we make make folder parallel to app.js named db ; inside that connectdb file , which would contain our code 


connectDB(DATABASE_URL);
//  called the connectDB function 



app.get('/',(req,res)=>{
    res.send("Hello World");
});



app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 


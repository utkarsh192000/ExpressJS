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

// const DATABASE_URL="mongodb://utkarsh:123456@localhost:27017/schooldb?authSource=schooldb"
// we can write this but its not safe 

const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"

// DATABASE CONNECTION 

connectDB(DATABASE_URL);
//  called the connectDB function 



app.get('/',(req,res)=>{
    res.send("Hello World");
});



app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 


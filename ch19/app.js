
import express from 'express'
// imported express module 
import mongoose from 'mongoose';
// imported mongoose
import connectDB from './db/connectdb.js';
// import connectDB function 
// import './models/Student.js'
import createDoc from './models/Student.js';


const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"
// set the value of DATABASE URL which can be used directly by name 
const app=express();
// created a instance of express 

const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000




// DATABASE CONNECTION 

connectDB(DATABASE_URL);

// create doc and save it 
// createDoc();

// we can also create doc and sav it by passing parameter
createDoc('amit',29,8660.78,['Gaming'],false,[{value:"This is bad"}]);


app.get('/',(req,res)=>{
    res.send("Hello World");
});



app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 


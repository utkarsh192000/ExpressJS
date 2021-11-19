import express from 'express'
// imported express module 
import connectDB from './db/connectdb.js';
import './models/Student.js'
// import whole file 

const app=express();
// created a instance of express 
const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000

const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"
// set the value of DATABASE URL which can be used directly by name 



// Database Connection 
connectDB(DATABASE_URL);




// ROUTING 
app.get('/',(req,res)=>{
    res.send("Hello World");
});



app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 


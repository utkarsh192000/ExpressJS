
import express from 'express'
// imported express module 

import connectDB from './db/connectdb.js';
// import connectDB , so that we call call it 
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
// set the value of DATABASE URL which can be used directly by name 

import web from './routes/web.js'
// import everythinh from routes , so that we can use it here

const app=express();
// created a instance of express 

const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000

// DATABASE CONNECTION 
connectDB(DATABASE_URL);


// USE JSON MIDDLEWARE , SO THAT JSON GOES TO REQ.BODY 
app.use(express.json());


// LOAD ROUTE 

app.use('/student',web);



app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 



import express from 'express'
// imported express module 
import mongoose from 'mongoose';
// imported mongoose
import connectDB from './db/connectdb.js';
// import connectDB function 
import { deleteDocById,deleteOneDoc,deleteManyDoc } from './models/Student.js';
// update functions of Student Model

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
// set the value of DATABASE URL which can be used directly by name 
const app = express();
// created a instance of express 

const port = process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000




// DATABASE CONNECTION 

connectDB(DATABASE_URL);


// deleteDocById("61977789ac3b6ab11ac8ecf5");
// // delete the document with given id 

// deleteOneDoc(26);
// // deletes One document with age 26

deleteManyDoc(27);
// deletes all the document that have age as 27 


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port


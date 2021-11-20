
import express from 'express'
// imported express module 
import mongoose from 'mongoose';
// imported mongoose
import connectDB from './db/connectdb.js';
// import connectDB function 

import { updateDocById, updateOneDoc, updateOneDocByField, updateManyDoc } from './models/Student.js';
// update functions of Student Model

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
// set the value of DATABASE URL which can be used directly by name 
const app = express();
// created a instance of express 

const port = process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000




// DATABASE CONNECTION 

connectDB(DATABASE_URL);


// updateDocById("61977769ac3b6ab11ac8ecf5");
// update as doc paased in id 

// updateOneDoc("61977769ac3b6ab11ac8ecf5");

// updateOneDoc("61977789ac3b6ab11ac8ecf5");
// updating one document using upsert 

// updateOneDocByField(25);
// update the value of document whose age is 25

updateManyDoc(29);
// it would update all the document with given with age 29 to given value in object 




app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port


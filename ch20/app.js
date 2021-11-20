
import express from 'express'
// imported express module 
import mongoose from 'mongoose';
// imported mongoose
import connectDB from './db/connectdb.js';
// import connectDB function 

import {
    getAllDoc, getAllDocSpecificField, getSingleDoc, getSingleDocSpecificField,
    getDocByField, getLimitedDoc, getSkipDoc, getDocCount, getSortedDoc, mixDoc,compDoc,logDoc
} from './models/Student.js'



const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
// set the value of DATABASE URL which can be used directly by name 
const app = express();
// created a instance of express 

const port = process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000




// DATABASE CONNECTION 

connectDB(DATABASE_URL);

// getAllDoc();
// called the function to retrieve te data 

// getAllDocSpecificField();
// function to get all document , but with specific fields 

// getSingleDoc();
// function to get single document based on Id 

// getSingleDocSpecificField();
// get single documnt by id and using specific fields like age, name etc.

// getDocByField();

// getLimitedDoc();

// getSkipDoc();

// getDocCount();
// counts the document

// getSortedDoc();
// sort the document on basis of some field

// mixDoc();

// compDoc();

logDoc();
// call the function that retrieved document based on logical operator

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port



import express from 'express'
// imported express module 
import connectDB from './db/connectdb.js';
// import connectDB , so that we call call it 
import web from './routes/web.js'
// import it as web , so that we can use what ever code is written inside it 


const app=express();
// created a instance of express 

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
// set the value of DATABASE URL which can be used directly by name 
const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000

// DATABASE CONNECTION 
connectDB(DATABASE_URL);

// SET UP TEMPLATE ENGINE 
app.set('view engine','ejs');


// LOAD ROUTES 

app.use('/',web);
// add whatever logic is imported as web 



app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 






import express from 'express'
// imported express module 

import web from './routes/web.js'

import {join} from 'path'


const app=express();
// created a instance of express 

const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000


// SET UP the directory where template files are located 

app.set('views','./views')
// we set that our template files are located in views folder 
// we need to mention it if our file name is view ; important to mention when there is some other name than views 


// SETUP THE TEMPLATE ENGINE TO USE 
app.set('view engine','ejs')
// setup the template engine you would be using for your project 
// it may be pug,ejs, dust or any other 


// STATIC FILES 

app.use('/static',express.static(join(process.cwd(),'public')))
// it will set the virtual path along with static ; so that we know that these files are static (css,js,images,videos)
// now thing wont work if dont access the like /static/css/style.css  



// LOAD ROUTES 

app.use('/',web);
// used the imported thing from as web 



app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 



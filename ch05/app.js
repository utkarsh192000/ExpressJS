

import express from 'express'
// imported express module 


const app = express();
// created a instance of express 

const port = process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000


// CREATE ROUTE 

// root request 
app.get('/', (req, res) => {
    // callback function always includes req,res as parameter 
    res.send("Get Method");
    // body of callback includes response; it means send a response in such form  
});


// // ALL method 
// app.all('/sabkuch', (req, res) => {
//     // callback function always includes req,res as parameter 
//     res.send("All Method");
//     // body of callback includes response; it means send a response in such form  
// });


// // ALL method for page not found ; if the rote is not present  
// app.all('/*', (req, res) => {
//     // callback function always includes req,res as parameter 
//     res.send("PAGE NOT FOUND ");
//     // If any such route is hit which is not present then Page not found response is send  
// });


// // ALL method for page not found ; if the route prefix path is not present  
// app.all('/api/*', (req, res) => {
//     // callback function always includes req,res as parameter 
//     res.send("PAGE NOT FOUND ");
//     // If any such route is hit which is not present then Page not found response is send  
// });


// STRING PATH 

// about endpoint request 
app.get('/about', (req, res) => {
    // callback function always includes req,res as parameter 
    res.send("This is about page ");
    // body of callback includes response; it means send a response in such form  
});

// contact endpoint request
app.get('/contact', (req, res) => {
    // callback function always includes req,res as parameter 
    res.send("This is my contact");
    // body of callback includes response; it means send a response in such form  
});


// STRING PATTERN PATH 

// app.get('/ab?cd',(req,res)=>{
//     res.send("This route path matches acd and abcd  ");
// });
// // this route callback will fire if abc aor abcd is hit ; last one should completely present 


// // REGULAR EXPRESSION PATH 

// app.get(/a/, (req, res) => {
//     res.send("This route path matches anything that has a in between the path ex: ab , delhia , dealhi ");
// });
// // this route callback will fire to any path which contains a , ; also we dont use quotes in this 


// ONE CALLBACK EXAMPLE 

// app.get('/cexample1',(req,res)=>{
//     res.send("Exmaple of single callback");
// });
// // here we jus have a single callbcak ; i.e only one function 


// // TWO CALLBACK EXAMPLE 

// app.get('/cexample2', (req, res,next) => {
//     console.log("First callback called");
//     // res.send("Example of single callback");
//     // to let route go into the second callback , one additional thing needs to be done 
//     // we need to next as parameter in addition to req, req
//     // and also we need to call next(); method to let route go into second callback
//     next();
// }, (req, res) => {
//     console.log("Second callback called");
//     res.send("2nd callback added");
// });
// // here we jus have a single callbcak ; i.e only one function 



// // AN ARRAY OF CALLBACK EXAMPLE

// const cb1=(req,res,next)=>{
//     console.log("First callback");
//     next();
// }


// const cb2=(req,res,next)=>{
//     console.log("Second callback");
//     next();
// }


// const cb3=(req,res)=>{
//     console.log("Third callback");
//     res.send("An array of callback example ");
// }

// // defined 3 callbacks beforehand 

// app.get('/cexample3',[cb1,cb2,cb3]);
// // used .get() in same except we passed earlier defined callbacks as in array



// // COMBINATION OF INDEPENDENT FUNCTION AND ARRAY OF FUNCTION 

// const cb1 = (req, res, next) => {
//     console.log("First callback");
//     next();
// }


// const cb2 = (req, res, next) => {
//     console.log("Second callback");
//     next();
// }

// // here we have defined two callbacks and third one we are gonna write there itself

// app.get('/cexample4', [cb1, cb2], (req, res, next) => {
//     console.log("third callback");
//     next();

// }, (req, res) => {
//     console.log("Fourth callback");
//     res.send("Combination of independent function and array of function ")
// });


// CHAIN ROUTE PATH CALLback

// used when we may have different type of HTTP method to the same route 

app.route('/student')
    .get((req, res) => {
        res.send("get student");
    })
    .post((req, res) => {
        res.send("Add new student");
    })
    .put((req, res) => {
        res.send("Update student");
    })

// we can see out path is getting duplicate,, so we use app.route() and res would as per the type of HTTP request performed  
// if there is .all() request , all request will be implemented first 



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at aparticluar port





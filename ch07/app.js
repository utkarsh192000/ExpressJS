
import express from 'express'
// imported express module 


const app = express();
// created a instance of express 

const port = process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000


// ROUTING

// app.get('/student/delete',(req,res)=>{
//     res.send("Student deleted");
// });
// since we want to delete the student as per his id , suppose we want to delete student with id 12 ; 
// we may define the path as /student/delete/12 
// but suppose no we want to delete the stduent with id 32 , then what ????
// here comes the concept of route parameter ; we will dynamically define the route as /student/delete/:id
// this would dynamically take the id and perform opration as per that 


// Route parameter 

// app.get('/student/delete/:id',(req,res)=>{
//     console.log(req.params);
//     // req.params contain an object which contain info about the id hit , we can destructure it   
//     // an object is printed which has "id" as key and and idValue typed in url as value 
//     // {"id":12} or {"id":123} 
//     res.send(`Student deleted ${req.params.id}`);
//     //  it would access the returned object's id  
// });


// app.get('/product/:category/:id', (req, res) => {
//     console.log(req.params);
//     // req.params contain an object which contain info about the id hit , we can destructure it   
//     // return an object { category: 'mobile', id: '12' }  , { category: 'clothes', id: '19' }
//     // localhost:3000/product/clothes/23
//     // res.send(`Product category:${req.params.category} and Product Id: ${req.params.id}`);
//     // //  it would access the returned object's category and id  

//     const {category,id}=req.params;
//     // destructuring the object , i.e we have store evrything returned from req.params in something as category and id
//     res.send(`Product category:${category} and Product Id: ${id}`); 
//     // this would also give the same result as earlier 
// });


// app.get('/product/order/:year/and/:month', (req, res) => {
//     console.log(req.params);
//     // req.params contain an object which contain info about the id hit , we can destructure it   
//     // return an object { year: '2016', month: 'jan' } after going through localhost:3000/product/order/2016/and/jan

//     const {year,month}=req.params;
//     // destructuring the object , i.e we have store evrything returned from req.params in something as year and month
//     res.send(`Product bought year:${year} and Product bought month : ${month}`); 
//     // this would also give the same result as earlier 
//     // it is not neccessary to be continues path , there can be somthin g static path in between also
// });

// app.get('/train/:from-:to', (req, res) => {
//     console.log(req.params);
//     // req.params contain an object which contain info about from and to dynamically as typed in url in browser , we can destructure it   
//     // return an object { from:"delhi",to:"mumbai"} after going through localhost:3000/train/delhi-mumbai

//     const { from, to } = req.params;
//     // destructuring the object , i.e we have store evrything returned from req.params in something as from and to
//     res.send(`Travelling from:${from} to : ${to}`);
//     // this would also give the same result as earlier 
//     // it is not neccessary to be continues path , there can be somthing - : symbol like - . are taken in static way  
// });


// app.get('/location/:state.:city', (req, res) => {
//     console.log(req.params);
//     // req.params contain an object which contain info about from and to dynamically as typed in url in browser , we can destructure it   
//     // return an object { state:"up",to:"noida"} after going through localhost:3000/location/up.noida

//     const { state,city} = req.params;
//     // destructuring the object , i.e we have store evrything returned from req.params in something as state and city
//     res.send(`Travelling from:${state} in : ${city}`);
//     // it is not neccessary to be continues path , there can be somthing - : symbol like - . are taken in static way  
// });



// WITH REGX EXAMPLE :

// app.get('/student/:id([0-9]{2})',(req,res)=>{
//     // here we have used regular expression concept ; that means we have only 0 to 9 character and specifically 2 digits in the string 
//     // typed in URL in browser ; earlier even if we had typed /student/utkarsh , it would have worked but , now it wont work
//     // ex which would work /student/12  , /student/45 
//     // a pararenthesis is given  to use regex 
//     console.log(req.params);
//     // req.params contain an object which contain info about the id hit , we can destructure it   
//     // an object is printed which has "id" as key and and idValue typed in url as value 
//     // {"id":12} or {"id":123} 
//     res.send(`Student deleted ${req.params.id}`);
//     //  it would access the returned object's id  
// });


// USE OF PIPELINE

// app.get('/:type/:id',(req,res)=>{
//     console.log(req.params);
//     // { type: 'post', id: '12' } anything written in place of type and id would work 
//     res.send("Post or Article");
// });


// app.get('/:type(post | article )/:id',(req,res)=>{
//     console.log(req.params);
//     // { type: 'post', id: '12' } anything written in place of type and id would not work; instead of type only post 
//     // or article would work , anything else wont work   
//     res.send("Post or Article");
// });



// APP.PARAM FUNCTION

// app.get('/user/:id',(req,res)=>{
//     console.log("This is user Id path")
//     res.send("RESPONSE OK ");
// });
// // This would work normally , but we want that , if that particular id is hit , a callback should run , for that app.param()
// // is used



// app.param('id',(req,res,next,id)=>{
//     console.log(`ID: ${id}`);
//     next();
// })
// // app.param is written so that if id is hit correctly , then this callback should run

// app.get('/user/:id',(req,res)=>{
//     console.log("This is user Id path")
//     res.send("RESPONSE OK ");
// });

// // whole process ran in order 
// // ID: 124
// // This is user Id path



// app.params ARRAY OF ROUTE PARAMETER 



// app.param(['id','page'],(req,res,next,value)=>{
//     console.log(`value: ${value}`);
//     next();
// })
// // app.param is written so that if id is hit correctly , then this callback should run
// // here we have two names in array 

// app.get('/user/:id/:page',(req,res)=>{
//     console.log("This is user Id path")
//     res.send("RESPONSE OK ");
// });
// // whole process ran in order 
// // value: 23
// // value: utk
// // This is user Id path



// QUERY STRING CONCEPT 

app.get('/product',(req,res)=>{
    console.log(req.query);
    // it will return an object req.query , which is fetched after the url has been typed in address bar 
    // anything that is written in path and after ? is query string 
    // after writing route like http://localhost:3000/product?category=mobile&id=12 in browser ,
    // such thing is returned { category: 'mobile', id: '12' }
    req.query = 
    res.send("Response ok");

});








app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port

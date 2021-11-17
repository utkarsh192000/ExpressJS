
import express from 'express'
// imported express module 

import student from './routes/student.js'
// we will import whatever is written in .routes/student.js as student , so that we can use it 


const app=express();
// created a instance of express 

const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000




app.use('/student',student);
//  here we are saying that app , you use the imported as student along with concatanation of path that we have given here 
 












// NOTE : EARLIER WRITTEN CODE WHICH IS SHIFTED TO routes/stduent.js 


// app.get('/student/all',(req,res)=>{
//     res.send(" All Student ");
// });
// // we have written a simple get route 



// // now we are going to write a bit elaborative logic 
// app.get('/student/delete/:id([0-9]{2})',(req,res)=>{
//     // we have written a code using route parameter , i.e dynamic routing 
//     console.log(req.params);
//     // prints the req.param object
//     const {id}=req.params
//     // destructure the object
//     console.log(id);
//     // print id field of object
//     if(id==10){
//         return res.send("This is id of Utkarsh no ,cannot be deleted ");
//         // if we id ==10 , we cant delete it
//     }
//     return res.send(` Student Delete ${id} `);
//     // else just print the id
// });
// // this is bit complex logic as comapared to earlier what we used to write ; sometime it may be 100 lines , and may be become
// // messy
// // So we are goint to use Router concept ; in which we will be creating a route fodler and define the route for each module 
// // also to shorten even that ; we will use controller concept , where we will create a controller folder, where we 
// // would write the logic and callback leaving only route in routes/student.js and app.js










app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 


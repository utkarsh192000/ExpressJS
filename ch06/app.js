// WHAT IS ROUTER ??
// Router class is used to create mosular, mountable route handlers
// It is a complete middleware and routing system
//  Every Express app has built in app router 

import express from 'express'
// imported express module 


// // old syntax 
// const stu=require('./routes/student.js');
// const tea=require('./routes/teacher.js');

// NEW syntax 

import stu from './routes/student.js'
import tea from './routes/teacher.js'
// imported both modules from routes where real routing for them is written
const app=express();
// created a instance of express 

const port= process.env.PORT || '3000';
// set a port ; it will either be taken from env or it will 3000


// Lad Router modules , so that we can use them 

app.use('/vidyarthi',stu);
app.use('/vidyarthi',tea);
// loaded the modules that we imported above in app.js , .use() method is used for this purpose 
// in Url it be fire as /vidyarthi/student/all  ; vidyarthi taken from here and .get() has /student/all in student.js




















// // MESSY CODE

// //  FOR EXAMPLE WE HAVE SCHOOL MANAGEMENT SYSTEM APPLICATION 

// // All student routes 

// app.get('/student/all',(req,res)=>{
//     res.send("All Student ");
// });

// app.post('/student/create',(req,res)=>{
//     res.send("New Student Created ");
// });

// app.put('/student/update',(req,res)=>{
//     res.send(" Student updated ");
// });

// app.delete('/student/delete',(req,res)=>{
//     res.send("Student Deleted");
// });


// // All teacher routes

// app.get('/teacher/all',(req,res)=>{
//     res.send("All Teacher ");
// });

// app.post('/teacher/create',(req,res)=>{
//     res.send("New Teacher Created ");
// });

// app.put('/teacher/update',(req,res)=>{
//     res.send(" Teacher updated ");
// });

// app.delete('/teacher/delete',(req,res)=>{
//     res.send("Teacher Deleted");
// });



// Note this code may seems to be very messy and complex , so here comes the concept of ROUTERs where we defines a different modules










app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
// using .listen() method to run a server at a particluar port 




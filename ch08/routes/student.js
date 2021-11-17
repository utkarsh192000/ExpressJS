
import express from 'express'
// import express 

import { allStudent,deleteStudent} from '../controllers/studentController.js';
// import this functions from controller , so that we use them here as callback in router.get/post/delete/put 

const router=express.Router();
// created the instance of router 



// Code will be reduced to so short , here we have just defined the route insted of whole business logic

router.get('/all',allStudent);
// allStudent code is written in controller , we just use it here  
router.get('/delete/:id([0-9]{2})',deleteStudent);
// similarly the logic for deleteStudent is in controller























// NOTE: code along with route and callback together ; but we are going to modify as we have already written callback in 
// ./controllers/student.js


// NOTE: instead of app , in this we will use router.get/post/delete/put etc.


// router.get('/all',(req,res)=>{
//     res.send(" All Student ");
// });


 
// router.get('/delete/:id([0-9]{2})',(req,res)=>{
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


export default router
// we export this logic so that it can be used elsewhere , especially in app.js

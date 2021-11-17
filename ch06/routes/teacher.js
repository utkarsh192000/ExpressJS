

import express from 'express';
//  import the express module from express

const router=express.Router();
// create an instance of Router






// All teacher routes

router.get('/teacher/all',(req,res)=>{
    res.send("All Teacher ");
});

router.post('/teacher/create',(req,res)=>{
    res.send("New Teacher Created ");
});

router.put('/teacher/update',(req,res)=>{
    res.send(" Teacher updated ");
});

router.delete('/teacher/delete',(req,res)=>{
    res.send("Teacher Deleted");
});




// module.export=router
// old way of exporting the module that we have made

export default router
// new way of exporting the route module created 
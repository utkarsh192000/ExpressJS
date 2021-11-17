


import express from 'express';
//  import the express module from express

const router=express.Router();
// create an instance of Router



// All student routes 

router.get('/student/all',(req,res)=>{
    res.send("All Student ");
});

router.post('/student/create',(req,res)=>{
    res.send("New Student Created ");
});

router.put('/student/update',(req,res)=>{
    res.send(" Student updated ");
});

router.delete('/student/delete',(req,res)=>{
    res.send("Student Deleted");
});



// module.export=router
// old way of exporting the module that we have made

export default router
// new way of exporting the route module created 
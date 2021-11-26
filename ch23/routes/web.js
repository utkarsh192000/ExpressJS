import express from "express";
// import express 

const router=express.Router();
import StudentController from '../controllers/studentController.js'
// import StudentControler class so that we can use it 

// Routers 
router.get('/setcookie',StudentController.set_cookie);
router.get('/getcookie',StudentController.get_cookie);
router.get('/deletecookie',StudentController.delete_cookie);



export default router
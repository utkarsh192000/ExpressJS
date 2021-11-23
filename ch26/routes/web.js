import express from 'express';
// import express 

const router=express.Router();
// create an instance of Router from express

import { UserController } from '../controllers/userController.js';
// import it so that we can use as a callback 


// Routing
router.get('/',UserController.home)
// when root route is called home function of UserController will run 

router.get('/registration',UserController.registration)
router.get('/login',UserController.login)




export default router
// export it so that we can use in app.js 

import express, { application } from 'express'
// import express


import { homeController } from '../controllers/homeController.js';
// import homecontroller to use as callback logic 

const router=express.Router();
// create an instance of Router method 


router.get('/',homeController);
// routing path for root/ home page 


export default router
// export router to use in app.js 
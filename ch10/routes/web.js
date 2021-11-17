
import express from 'express'
// imported express module 

const router=express.Router();
// created a instance of express.Router 

import { homeController} from '../controllers/homeController.js';
import { aboutController} from '../controllers/aboutController.js';

// imported both from controller so that we can use them as callback 


router.get('/',homeController);
// root page would be home page 
router.get('/about',aboutController);
// /about would response as about page 


export default router
// export router them so that it can be connected to app.js 
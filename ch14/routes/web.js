import express from 'express'
// import express 

// import { homeController } from '../controllers/homeController.js'
import { homeController } from '../controllers/homeController.js'
// import it to use as callback for routing 

import { aboutController } from '../controllers/aboutController.js';

const router=express.Router();
// create instance 

router.get('/',homeController)
// set a routing path along with callback

router.get('/about',aboutController)




export default router 
// export it so that we can use in app.js 
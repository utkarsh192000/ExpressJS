import express from 'express'
// import express module 

import StudentController from '../controllers/studentController.js';
// import clas StudentController 


const router = express.Router();
// craete an instance of express Router 

router.get('/',StudentController.getAllDoc);
router.post('/',StudentController.createDoc);
router.get('/:id',StudentController.getSingleDocById);
router.put('/:id',StudentController.updateDocById);
router.delete('/:id',StudentController.deleteDocById);





export default router
// export router so that it could be used in app.js 
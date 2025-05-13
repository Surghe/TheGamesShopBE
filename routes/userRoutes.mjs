import express from 'express';
import userControllers from '../controllers/userControllers.mjs';

const router = express.Router();

router.post('/register', userControllers.register);

// POST login route
// make sure req.body has email and password
// Data vaildaltion
    // res w/ err
// check if user exists in DB
    // res w/ err if doesnt exist
// check if user pw matches req. body pw
    // res w/ err
    // res w/ user id
    
router.post('/login' , userControllers.login);

export default router;
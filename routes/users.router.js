import express from 'express'
import userController from '../controller/user.controller.js';
const router = express.Router();

router.post('/signin',userController.signIn)
router.post('/signup',userController.signUp)

export default router;
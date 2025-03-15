import express from 'express'
import userRoute from './users.router.js'
import taskRouter from './task.router.js'
const router = express.Router();

router.use('/user',userRoute)
router.use('/task',taskRouter)

export default router
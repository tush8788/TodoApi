import express from 'express'
import userRoute from './users.router.js'
const router = express.Router();

router.use('/user',userRoute)


export default router
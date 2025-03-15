import express from 'express'
import taskController from '../controller/task.controller.js';
const router = express.Router();

router.get('/',taskController.getAllTasks)

router.post('/',taskController.createTask);

router.delete('/',taskController.deleteTask);

router.put('/',taskController.updateTask);

export default router 
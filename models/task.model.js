import TaskSchema from '../schema/taskSchema.js'
export default class TaskModel {
    
    createTask(name,desc,user,url){
        return TaskSchema.create({name,desc,user,url})
    }

    getTasks(user){
        return TaskSchema.find({user})
    }

    getTaskGivenId(taskId){
        return TaskSchema.findById(taskId);
    }

    updateTaskById(taskId,userId,data){
        return TaskSchema.updateOne({_id:taskId,user:userId},data);
    }
}
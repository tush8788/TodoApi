import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    url:{
        type:String
    }
},{
    timestamps:true
})


const task = mongoose.model('task',taskSchema);

export default task;
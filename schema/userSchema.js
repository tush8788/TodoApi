import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        isUnique:true
    },
    password:{
        type:String,
    }
},{
    timestamps:true
});

const user = mongoose.model('user',userSchema);

export default user
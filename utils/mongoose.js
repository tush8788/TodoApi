import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/task-todo')

const db = mongoose.connection;

db.once('open',()=>{
    console.log("DB Connected");
})

db.on('error',()=>{
    console.log("error in connect db");
})

export default db
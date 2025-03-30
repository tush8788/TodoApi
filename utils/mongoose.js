import mongoose from "mongoose";
import config from "../config.js";

mongoose.connect(config.mongoDBUrl)

const db = mongoose.connection;

db.once('open',()=>{
    console.log("DB Connected");
})

db.on('error',()=>{
    console.log("error in connect db");
})

export default db
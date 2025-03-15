import express from 'express'
const port = 4000;
const app = express();


app.listen(port,(err)=>{
    console.log("server is up on port ",port)
})

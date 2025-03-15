import express from 'express'
import router from './routes/index.js';
import db from './utils/mongoose.js';

const port = 4000;
const app = express();

app.use(express.json({}))

app.use('/api',router)

app.listen(port,(err)=>{
    console.log("server is up on port ",port)
})

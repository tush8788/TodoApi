import UserModel from "../models/user.model.js";
import jwt from "../utils/jwt.js";
import _ from 'lodash'

let whileListUrls = [
    '/api/user/signin',
    '/api/user/signup'
]

const authenticate = async (req,res,next) => {
    try{
        if(!whileListUrls.includes(req.url)) {
            let token = req?.headers['todo-token']            
            if(_.isEmpty(token)) throw new Error()
            let decode = jwt.verifyToken(token);
        console.log("decode?.userId ",decode?.userId)
            const user = await new UserModel().getUserFromId(decode?.userId)
            if(_.isEmpty(user)) {throw new Error("")}
            req.headers['_user'] = { id: user.id };
            console.log("called next")
            next();
        }else{
            next();
        }
        
    }
    catch(err){
        console.log("err",err)
        return res.status(401).json({message:"unauthorize"})
    }
}

export default authenticate
import userService from "../services/user.service.js";
const signIn = async (req,res) => {
    try {
        let {email,password} = req.body;
        let resp = await userService.signin(email,password);
        return res.status(200).json(resp);
    }
    catch (err) {
        return res.status(500).json(res.message);
    }
}

const signUp = async (req,res) => {
    try{
        console.log(req.body)

        const {name,email,password} = req.body;
        
        const resp = await userService.signup(name,email,password)
        return res.status(200).json({message:"success"})
    }catch(err){
        console.log(err);
        return res.json(500,err);
    }
}


export default {
    signIn,
    signUp
}
import userService from "../services/user.service.js";
const signIn = async (req, res) => {
    try {
        let { email, password } = req.body;
        let resp = await userService.signin(email, password);
        return res.status(200).json(resp);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const resp = await userService.signup(name, email, password)
        return res.status(200).json(resp)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}

const verifyGoogleToken = async (req, res) => {
    try {
        let {token} = req.body;
        let resp = await userService.googleTokenVerify(token);
        return res.status(200).json(resp)
    } catch (err) {
        return res.status(500).json({message:err?.message})
    }
}


export default {
    signIn,
    signUp,
    verifyGoogleToken
}
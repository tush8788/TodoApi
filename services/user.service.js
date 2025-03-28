import _ from "lodash";
import jwt from '../utils/jwt.js'
import UserModel from "../models/user.model.js";
import googleVerify from "../utils/googleVerify.js";

const signin = async (email, password) => {
    try {
        let user = await new UserModel().getUser(email);

        if (_.isEmpty(user) || user.password != password) throw new Error("email or password not match");
        let token = jwt.createToken({ userId: user.id });
        return {
            name: user.name,
            email: user.email,
            token
        }
    }
    catch (err) {
        console.log(err)
        throw err;
    }

}

const signup = async (name, email, password) => {
    try {
        let user = await new UserModel().getUser(email);
        if (!_.isEmpty(user)) throw new Error("User Already exist");
        user = await new UserModel().createUser(name, email, password);
        return {
            message: 'success'
        }
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

const googleTokenVerify = async (token) => {
    try {
        const { name, email } = await googleVerify(token);
        let user = await new UserModel().getUser(email);
        if (_.isEmpty(user)){
            user = await new UserModel().createUser(name, email, 'csdmlkcljsnncsd');
        }
        let jsontoken = jwt.createToken({ userId: user.id });
        return {
            name: user.name,
            email: user.email,
            token:jsontoken
        }

    } catch (err) {
        console.log("error google verify token ",err)
        throw err;
    }
}

export default {
    signin,
    signup,
    googleTokenVerify
}
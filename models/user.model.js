import userSchema from '../schema/userSchema.js'
export default class UserModel {
    getUser(email){
        return userSchema.findOne({email:email});
    }

    createUser(name,email,password){
        return userSchema.create({name,email,password})
    }
}
import {OAuth2Client } from 'google-auth-library'
import config from '../config.js';
export default async (token) => {
    try{
        let googleClientId = config.googleClientId
        const client = new OAuth2Client();
        const ticket = await client.verifyIdToken({
            idToken:token,
            audience:googleClientId
        })

        const payload = ticket.getPayload();
        const { email, name} = payload; 
        return{
            email, 
            name
        }       
    }
    catch(err){
        console.log("error in google verify token:-",err)
        throw err;
    }
}
import {OAuth2Client } from 'google-auth-library'
export default async (token) => {
    try{
        let googleClientId = '123325143947-405lsr4ggsu74bt5nrujieu88db8c5jg.apps.googleusercontent.com'
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
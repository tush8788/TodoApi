import { json } from 'express';
import jwt from 'jsonwebtoken'
let secrteKey = 'sdsjnskn';

const createToken = (payload) => {
    return jwt.sign(payload,secrteKey,{expiresIn:'1 day'});
}

const verifyToken = (token) => {
    return jwt.verify(token,secrteKey);
}

export default {
    createToken,
    verifyToken
}
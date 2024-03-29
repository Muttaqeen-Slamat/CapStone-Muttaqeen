import { config } from 'dotenv'
import jwt from "jsonwebtoken";
config()

const {sign, verify} = jwt

function createToken(user){
    return sign({
        email: user.email,
        emailPwd: user.emailPwd
    }, 
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    }
    )
}

function verifyAToken(req, res, next) {
    const token = req?.headers['Authorization']
    if(token) {
        if(verify(token, process.env.SECRET_KEY)){
            next()
        }else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials."
            })
        }
    }else {
        res?.json({
            status: res.statusCode,
            msg: "Please login."
        })
    }
}

export {
    createToken,
    verifyAToken
}
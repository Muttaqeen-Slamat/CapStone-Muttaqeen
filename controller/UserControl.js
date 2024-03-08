import { express } from "express";
import bodyParser, { json } from "body-parser";
import { users } from "../model/index.js"
import {verifyAToken} from "../middleware/AuthenticateUser.js"

const userRouter = express.Router()


//=====USERS=====//
userRouter.get('/', (req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            message: "Failed to retrieve all Users"
        })
    }
})

userRouter.get('/:id', (req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            message: "Failed to retrieve Single Users"
        })
    }
})

userRouter.post('/register', (req, res)=>{
    try{
        users.createUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            message: "Failed to add a User"
        })
    }
})

userRouter.patch('/update/:id', (req, res)=>{
    try{
        users.updateUser(req, res)
    }catch(e){
        res.json({
            status: statusCode,
            message: "Failed to update User"
        })
    }
})

userRouter.delete('/delete/:id', (req, res)=>{
    try{
        users.deleteUser(req, res)
    }catch(e){
        res.json({
            status: statusCode,
            message: "Failed to delete User"
        })
    }
})

userRouter.post('/login', (req, res)=>{
    try{
        users.login(req, res)
    }catch(e){
        res.json({
            status: statusCode,
            message: "Failed to Log In"
        })
    }
})

export{
    userRouter
}
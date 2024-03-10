import {connection as db} from "../config/index.js"
import {hash, compare} from 'bcrypt'
import { createToken } from "../middleware/AuthenticateUser.js"

class Users{
    fetchUsers(req, res) {
        const qry = `
        SELECT userID, firstName, lastName,
        age, gender, email, emailPwd, userRole, userName
        FROM Users;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res) {
        const qry = `
        SELECT userID, firstName, lastName,
        age, gender, email, emailPwd, userRole, userName
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    async createUser(req, res) {
        // Payload
        let data = req.body
        data.emailPwd = await hash(data?.emailPwd, 8)
        let user = {
            email: data.email,
            emailPwd: data.emailPwd
        }
        const qry = `
        INSERT INTO Users
        SET ?;
        `     
        db.query(qry, [data], (err)=>{
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: 'This email address already exist'
                })
            }else {
                // Create a token
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: 'You\'re registered'
                })
            }
        })   
    }
    async updateUser(req, res) {
        const data = req.body 
        if(data?.userPwd){
            data.userPwd = await hash(data?.userPwd, 8)
        }
            
        const qry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id};
        `
        db.query(qry, [data], (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                msg: "The user information is updated."
            })
        })

    }
    deleteUser(req, res) {
        const qry = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                msg: "The user information has been removed."
            })
        })
    }
    login(req, res) {
        const {email, emailPwd} = req.body 
        const qry = `
        SELECT userID, firstName, lastName, 
        age, gender, email, emailPwd, userRole, userName
        FROM Users
        WHERE email = '${email}';
        `
        db.query(qry, async(err, result)=>{
            if(err) throw err 
            if(!result?.length){
                res.json({
                    status: res.statusCode, 
                    msg: "You provided a wrong email address."
                })
            }else {
                // Validate password
                const validPass = await compare(emailPwd, result[0].emailPwd)
                if(validPass) {
                    const token = createToken({
                        email, 
                        emailPwd
                    })
                    res.json({
                        status: res.statusCode,
                        msg: "You're logged in",
                        token, 
                        result: result[0]
                    })
                }else {
                    res.json({
                        status: res.statusCode,
                        msg: "Please provide the correct password."
                    })
                }
            }
        })
    }

}

export {
    Users
}
    //== trying cart api ==//
//     fetchCarts(req, res) {
//         const qry = `
//         SELECT cartID, userID, prodID
//         FROM Cart;
//         `
//         db.query(qry, (err, results)=>{
//             if(err) throw err
//             res.json({
//                 status: res.statusCode,
//                 results
//             })
//         })
//     }
//     fetchCart(req, res) {
//         const qry = `
//         SELECT
//     Users.userID,
//     Users.firstName,
//     Users.lastName,
//     Users.age,
//     Users.gender,
//     Users.email,
//     Users.userName,
//     Users.userRole,
//     Cart.cartID,
//     Products.prodID,
//     Products.prodName,
//     Products.prodPrice,
//     Products.category,
//     Products.quantity,
//     Products.prodDesc,
//     Products.img
// FROM
//     Users
// JOIN
//     Cart ON Users.userID = Cart.userID
// JOIN
//     Products ON Cart.prodID = Products.prodID
//         WHERE cartID = ${req.params.id};
//         `
//         db.query(qry, (err, result)=>{
//             if(err) throw err 
//             res.json({
//                 status: res.statusCode,
//                 result
//             })
//         })
//     }

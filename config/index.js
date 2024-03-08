import { createPool } from "mysql";
import { config } from "dotenv";
config()

const connection = createPool({
    host: process.env.DB_Host,
    database: process.env.DB_Name,
    user: process.env.DB_User,
    password: process.env.DB_Password,
    multipleStatements: true,
    connectionLimit: 30
})

export {
    connection
}
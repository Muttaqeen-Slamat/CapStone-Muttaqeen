import { userRouter, express } from "./controller/UserControl.js";
import { productRouter } from "./controller/ProductControl.js";
import { cartRouter } from "./controller/CartControl.js";
import cookieParser from "cookie-parser";
import {errorHandling} from './middleware/ErrorHandling.js'
import path from 'path'
import cors from 'cors'
import { config } from "dotenv";
config()

const app = express()
const port = +process.env.PORT || 4500

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
      extended: true,
    }),
    cookieParser(), 
    cors()
)

app.get('^/$|/Capeomp', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/cart', cartRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    console.log(`Server running on http://localhost:${port}`);
})


// app.js (or your main file)

// import express from 'express';
// import bodyParser from 'body-parser';
// import { userRouter, express as userExpress } from './userRouterFile.js';
// import { productRouter } from './productRouterFile.js';
// import cartController from './cartController.js'; // Import the cart controller

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// app.use('/users', userExpress, userRouter);
// app.use('/products', productRouter);

// // Add a route for adding a product to the cart
// app.post('/cart/addToCart', bodyParser.json(), cartController.addToCart);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

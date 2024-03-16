import express from 'express';
import bodyParser from 'body-parser';
import { cart } from '../model/index.js'; // Adjust the path accordingly

const cartRouter = express.Router();

cartRouter.post('/addCart', bodyParser.json(), (req, res) => {
    try {
        cart.addToCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add the product to the cart.',
        });
    }
});

cartRouter.get('/getCart/:userID', (req, res) => {
    try {
        cart.fetchUserCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to fetch the user cart.',
        });
    }
});

cartRouter.get('/getCart', (req, res) => {
    try {
        cart.fetchUserCarts(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to fetch the user cart.',
        });
    }
});

cartRouter.patch('/updateCart/:cartID', bodyParser.json(), (req, res) => {
    try {
        cart.updateCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to update the cart.',
        });
    }
});

cartRouter.delete('/removeFromCart/:cartID', (req, res) => {
    try {
        cart.removeFromCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to remove the product from the cart.',
        });
    }
});

export { 
    cartRouter 
};

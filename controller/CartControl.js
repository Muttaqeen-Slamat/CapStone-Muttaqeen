import express from 'express';
import bodyParser from 'body-parser';
import { cart } from '../model/index.js'; // Adjust the path accordingly

const cartRouter = express.Router();

cartRouter.get('/', (req, res) => {
    try {
        cart.fetchCarts(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve carts'
        });
    }
});

cartRouter.get('/:id', (req, res) => {
    try {
        cart.fetchCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve the cart'
        });
    }
});

cartRouter.post('/add', bodyParser.json(), (req, res) => {
    try {
        cart.createCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new cart.'
        });
    }
});

cartRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        cart.updateCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to update the cart'
        });
    }
});

cartRouter.delete('/delete/:id', (req, res) => {
    try {
        cart.deleteCart(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete the cart.'
        });
    }
});

export { cartRouter };

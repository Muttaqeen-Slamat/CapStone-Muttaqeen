import { connection as db } from "../config/index.js";

class Cart {
    fetchCarts(req, res) {
        const qry = `
            SELECT cartID, userID, prodID, quantity
            FROM UserCart;
        `;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchCart(req, res) {
        const qry = `
            SELECT cartID, userID, prodID, quantity
            FROM UserCart
            WHERE cartID = ${req.params.id};
        `;
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result
            });
        });
    }

    createCart(req, res) {
        const data = req.body;
        const qry = `
            INSERT INTO UserCart (userID, prodID, quantity)
            VALUES (?, ?, ?);
        `;
        db.query(qry, [data.userID, data.prodID, data.quantity], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: 'Cart added successfully.'
            });
        });
    }

    updateCart(req, res) {
        const data = req.body;
        const qry = `
            UPDATE UserCart
            SET userID = ?, prodID = ?, quantity = ?
            WHERE cartID = ${req.params.id};
        `;
        db.query(qry, [data.userID, data.prodID, data.quantity], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: 'Cart updated successfully.'
            });
        });
    }

    deleteCart(req, res) {
        const qry = `
            DELETE FROM UserCart
            WHERE cartID = ${req.params.id};
        `;
        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: 'Cart deleted successfully.'
            });
        });
    }
}

export { 
  Cart 
};
import { connection as db } from "../config/index.js";

class Cart {
  addToCart(req, res) {
    const data = req.body;
    const qry = `
      INSERT INTO UserCart
      SET ?;
    `;

    db.query(qry, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Product added to the cart successfully.",
      });
    });
  }

  fetchUserCart(req, res) {
    const userID = req.params.userID;
    const qry = `
      SELECT UserCart.cartID, UserCart.userID, UserCart.prodID, UserCart.quantity,
      Products.prodName, Products.prodPrice, Products.category, Products.quantity as availableQuantity
      FROM UserCart
      JOIN Products ON UserCart.prodID = Products.prodID
      WHERE UserCart.userID = ${userID};
    `;

    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  updateCart(req, res) {
    const cartID = req.params.cartID;
    const data = req.body;
    const qry = `
      UPDATE UserCart
      SET ?
      WHERE cartID = ${cartID};
    `;

    db.query(qry, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Cart updated successfully.",
      });
    });
  }

  removeFromCart(req, res) {
    const cartID = req.params.cartID;
    const qry = `
      DELETE FROM UserCart
      WHERE cartID = ${cartID};
    `;

    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Product removed from the cart successfully.",
      });
    });
  }
}

export { Cart };

const express = require('express');
const router = express.Router();
const pool = require('./db');

// Add item to cart
// Add item to cart
router.post('/add_cart/:email', async (req, res) => {
    const { email } = req.params;
    const { cartItem } = req.body;

    try {
        const { uuid, _id, name, image, price, size, quantity, parentProductName } = cartItem;

        // Ensure price is converted to decimal
        const priceDecimal = parseFloat(price);

        // Insert into DB
        const [result] = await pool.query(`
            INSERT INTO carts (email, uuid, product_id, name, image, price, size, quantity, parent_product_name)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            email, uuid, _id, name, image, priceDecimal, size, quantity, parentProductName || ''
        ]);

        res.json({ success: true, message: "Cart updated" });
    } catch (err) {
        console.error("Error while inserting item to cart:", err.message);  // Log detailed error message
        res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });  // Send back error message to the client
    }
});
// POST /api/cart/remove
router.post('/remove', async (req, res) => {
    const { email, uuid } = req.body;

    if (!email || !uuid) {
        return res.status(400).json({ success: false, message: "Missing email or uuid" });
    }

    console.log('Removing item:', { email, uuid }); // Log the received data

    try {
        // Change 'db' to 'pool' for the query
        const result = await pool.query("DELETE FROM carts WHERE email = ? AND uuid = ?", [email, uuid]);
        console.log('Delete result:', result); // Log the result from db
        res.json({ success: true, message: "Item removed" });
    } catch (err) {
        console.error('Error in remove:', err); // Log the error
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// POST /api/cart/update
// POST /api/cart/remove
// POST /api/cart/remove
router.post('/remove', async (req, res) => {
    const { email, uuid } = req.body;

    if (!email || !uuid) {
        return res.status(400).json({ success: false, message: "Missing email or uuid" });
    }

    console.log('Removing item:', { email, uuid }); // Log the received data

    try {
        // Change 'cart' to 'carts' for the query
        const result = await pool.query("DELETE FROM carts WHERE email = ? AND uuid = ?", [email, uuid]);
        console.log('Delete result:', result); // Log the result from db
        res.json({ success: true, message: "Item removed" });
    } catch (err) {
        console.error('Error in remove:', err); // Log the error
        res.status(500).json({ success: false, message: "Server error" });
    }
});


// POST /api/cart/update
router.post('/update', async (req, res) => {
    const { email, uuid, quantity } = req.body;

    if (!email || !uuid || quantity == null) {
        return res.status(400).json({ success: false, message: "Missing data" });
    }

    console.log('Updating item:', { email, uuid, quantity }); // Log the received data

    try {
        // Use the correct table name 'carts'
        const result = await pool.query("UPDATE carts SET quantity = ? WHERE email = ? AND uuid = ?", [quantity, email, uuid]);
        console.log('Update result:', result); // Log the result from db
        res.json({ success: true, message: "Cart updated" });
    } catch (err) {
        console.error('Error in update:', err); // Log the error
        res.status(500).json({ success: false, message: "Server error" });
    }
});

router.post('/get', async (req, res) => {
    const token = req.headers.token;
    // NOTE: You may want to decode token securely to get email
    const email = req.body.email || ""; // fallback

    try {
        const [rows] = await pool.query(`
            SELECT uuid, product_id AS _id, name, image, price, size, quantity, parent_product_name AS parentProductName
            FROM carts WHERE email = ?
        `, [email]);

        res.json({ success: true, cartData: rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error fetching cart" });
    }
});

// POST /api/cart/clear
router.post('/clear', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: "Missing email" });
    }

    console.log('Clearing cart for user:', email); // Log the email for debugging

    try {
        // Remove all items from the cart for the given email
        const result = await pool.query("DELETE FROM carts WHERE email = ?", [email]);
        console.log('Clear cart result:', result); // Log the result from DB
        
        res.json({ success: true, message: "Cart cleared" });
    } catch (err) {
        console.error('Error in clear:', err); // Log the error
        res.status(500).json({ success: false, message: "Server error" });
    }
});

module.exports = router;

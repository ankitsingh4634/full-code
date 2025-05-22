const express = require('express');
const router = express.Router();
const pool = require('./db');

// POST /api/orders
router.post('/', async (req, res) => {
    const {
        id,
        userId,
        items,
        amount,
        address,
        status,
        paymentMethod,
        payment,
        date
    } = req.body;

    const conn = await pool.getConnection(); // Get connection for transaction

    try {
        await conn.beginTransaction();

        // Insert into orders table
        await conn.query(`
            INSERT INTO orders (
                id, user_id, status, amount, payment_method, payment, date,
                first_name, last_name, email, street, city, state, zipcode, country, phone
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            id,
            userId,
            status || 'Order Placed',
            parseFloat(amount),
            paymentMethod || 'Cash',
            payment || false,
            date,
            address.firstName || '',
            address.lastName || '',
            address.email || '',
            address.street || '',
            address.city || '',
            address.state || '',
            address.zipcode || '',
            address.country || '',
            address.phone || ''
        ]);

        // Insert each item into order_items
        const itemInserts = items.map(item => {
            return conn.query(`
                INSERT INTO order_items (
                    order_id, uuid, name, description, price, image, category, sub_category,
                    sizes, bestseller, date, size, quantity
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [
                id,
                item.uuid || '',
                item.name || '',
                item.description || '',
                parseFloat(item.price),
                (item.image && item.image[0]) || '',
                item.category || '',
                item.subCategory || '',
                item.sizes || '',
                item.bestseller || false,
                item.date || date,
                item.size || '',
                item.quantity || 1
            ]);
        });

        await Promise.all(itemInserts);

        await conn.commit();
        res.status(200).json({ success: true, message: 'Order placed successfully' });
    } catch (error) {
        await conn.rollback();
        console.error('Order placement error:', error);
        res.status(500).json({ success: false, message: 'Failed to place order', error: error.message });
    } finally {
        conn.release();
    }
});
// GET /api/orders/userorders?userId=xyz
router.get('/userorders', async (req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ success: false, message: 'Missing userId' });
    }

    const conn = await pool.getConnection();

    try {
        // Fetch all orders for the given userId
        const [orders] = await conn.query(
            `SELECT * FROM orders WHERE user_id = ? ORDER BY date DESC`,
            [encodeURIComponent(userId)]
        );

        // Fetch items for each order
        const fullOrders = await Promise.all(orders.map(async (order) => {
            const [items] = await conn.query(
                `SELECT * FROM order_items WHERE order_id = ?`,
                [order.id]
            );

            return {
                ...order,
                items,
            };
        }));

        res.status(200).json({ success: true, orders: fullOrders });
    } catch (error) {
        console.error('Fetch orders error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch orders', error: error.message });
    } finally {
        conn.release();
    }
});

module.exports = router;

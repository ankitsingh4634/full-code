const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const { getJsonCatalog } = require('./catalog');
const authRoutes = require('./auth');
const PORT = process.env.PORT || 3000;
const cartRoutes = require('./cart');
const orderRoutes = require('./order');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static images from the /images folder
app.use('/catalogue', express.static(path.join(__dirname, 'catalogue')));

app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
// Route to get full catalog (builds full image URLs on demand)
app.get('/api/catalog', (req, res) => {
  const host = req.protocol + '://' + req.get('host');
  const catalog = getJsonCatalog(host); // pass current host dynamically
  res.json(catalog);
});

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  const host = req.protocol + '://' + req.get('host');
  const catalog = getJsonCatalog(host); // pass current host dynamically
  res.json({
    homepage:"null"
  });
});


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

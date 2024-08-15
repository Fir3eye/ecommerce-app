const express = require('express');
const app = express();
const port = 5000;

// Simple API route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ]);
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});

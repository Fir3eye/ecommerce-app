// src/App.js
import React, { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const checkout = () => {
    alert(`Total: $${cartItems.reduce((total, item) => total + item.price, 0)}`);
    setCartItems([]); // Clear the cart after checkout
  };

  return (
    <div>
      <h1>E-commerce Store</h1>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} checkout={checkout} />
    </div>
  );
};

export default App;

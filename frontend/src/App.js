// src/App.js
import React, { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import './index.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 150, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 200, image: 'https://via.placeholder.com/150' },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const checkout = () => {
    alert(`Total: $${cartItems.reduce((total, item) => total + item.price, 0)}`);
    setCartItems([]); // Clear the cart after checkout
  };

  return (
    <div className="container">
      <header>
        <h1>Sen DevOps: E-commerce Store</h1>
      </header>
      <main>
        <div className="product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <Cart cartItems={cartItems} checkout={checkout} />
      </main>
    </div>
  );
};

export default App;

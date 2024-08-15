// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems, checkout }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;

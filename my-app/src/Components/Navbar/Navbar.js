import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-cart">
        <span>Cart ({totalItems})</span>
        <Link to="/cart">
          <button className="checkout-button">Go to Cart</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

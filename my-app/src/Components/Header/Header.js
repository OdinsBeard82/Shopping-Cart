import React from 'react';
import './Header.css';

function Header() {

  

  return (
    <div className="header">
      <h1 className="header-title">NBA Shop</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/cart">Cart</a></li> 
        </ul>
      </nav>
    </div>
  );
}

export default Header;

import React from 'react';
import './Header.css'; // Importing the associated CSS file

function Header() {
  return (
    <div className="header">
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

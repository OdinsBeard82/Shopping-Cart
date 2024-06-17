import React from 'react';
import './Header.css';

function Header() {

  
  return (
    <div className="header">
      <h1 className="header-title">NBA Shop</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

import React from 'react';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';
import CartProvider from './CartContext'; // Import as default
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <ProductList />
      </div>
    </CartProvider>
  );
}

export default App;


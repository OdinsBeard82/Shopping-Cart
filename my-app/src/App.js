import React from 'react';
import Header from './Components/Header/Header'; 
import ProductList from './Components/ProductList/ProductList'; 
import Cart from './Components/Cart/Cart';
import { CartProvider } from './CartContext'; 
import './App.css'; 

function App() {
  return (
    <CartProvider> 
      <div className="App">
        <Header /> 
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;

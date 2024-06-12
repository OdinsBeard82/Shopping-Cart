import React from 'react';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList'; // Import ProductList component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList /> {/* Add ProductList component */}
    </div>
  );
}

export default App;


import React, { useEffect, useState, useContext } from 'react';
import './ProductList.css';
import { CartContext } from '../../CartContext';

function ProductList() {
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = [
        {
          id: 1,
          name: 'Phoenix Suns Jersey',
          price: '£50',
          imageUrl: 'https://media.giphy.com/media/Y6lz7iFsmOJ62tzsQ1/giphy.gif',
          team: 'suns'
        },
        {
          id: 2,
          name: 'Golden State Warriors Jersey',
          price: '£55',
          imageUrl: 'https://media.giphy.com/media/hCGVRMoZ0p7jjcN0lM/giphy.gif',
          team: 'warriors'
        },
        {
          id: 3,
          name: 'Dallas Mavericks Jersey',
          price: '£52',
          imageUrl: 'https://media.giphy.com/media/QmAd1Yyx2beOZU20ZR/giphy.gif',
          team: 'mavericks'
        },
        {
          id: 4,
          name: 'Phoenix Suns Shorts',
          price: '£30',
          imageUrl: 'https://media.giphy.com/media/UdjJ4bOs6VpYIPd4bn/giphy.gif',
          team: 'suns'
        },
        {
          id: 5,
          name: 'Golden State Warriors Shorts',
          price: '£32',
          imageUrl: 'https://media.giphy.com/media/QRqML9rKTWZTGYOVJ9/giphy.gif',
          team: 'warriors'
        },
        {
          id: 6,
          name: 'Dallas Mavericks Shorts',
          price: '£31',
          imageUrl: 'https://media.giphy.com/media/QmAd1Yyx2beOZU20ZR/giphy.gif',
          team: 'mavericks'
        },
        {
          id: 7,
          name: 'Phoenix Suns Shoes',
          price: '£100',
          imageUrl: 'https://media.giphy.com/media/qcd2RWLmFwQOOFiJ5B/giphy.gif',
          team: 'suns'
        },
        {
          id: 8,
          name: 'Golden State Warriors Shoes',
          price: '£105',
          imageUrl: 'https://media.giphy.com/media/TKvZ8O5UKvNn5Y5HA5/giphy.gif',
          team: 'warriors'
        }
      ];
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Call addToCart function with the selected product
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className={`product-item ${product.team}`}>
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

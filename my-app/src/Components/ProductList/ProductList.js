import React, { useContext, useState } from 'react';
import { CartContext } from '../../CartContext';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Phoenix Suns Jersey',
      price: '£50',
      imageUrl: '<iframe src="https://giphy.com/embed/Y6lz7iFsmOJ62tzsQ1" class="product-image" frameBorder="0" allowFullScreen></iframe>',
      team: 'suns',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Golden State Warriors Jersey',
      price: '£55',
      imageUrl: '<iframe src="https://giphy.com/embed/hCGVRMoZ0p7jjcN0lM" class="product-image" frameBorder="0" allowFullScreen></iframe>',
      team: 'warriors',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Dallas Mavericks Jersey',
      price: '£52',
      imageUrl: '<iframe src="https://giphy.com/embed/QmAd1Yyx2beOZU20ZR" class="product-image" frameBorder="0" allowFullScreen></iframe>',
      team: 'mavericks',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Phoenix Suns Shorts',
      price: '£30',
      imageUrl: '<iframe src="https://giphy.com/embed/UdjJ4bOs6VpYIPd4bn" class="product-image" frameBorder="0" allowFullScreen></iframe>',
      team: 'suns',
      quantity: 1,
    },
    {
      id: 5,
      name: 'Golden State Warriors Shorts',
      price: '£32',
      imageUrl: '<iframe src="https://giphy.com/embed/QRqML9rKTWZTGYOVJ9" class="product-image" frameBorder="0" allowFullScreen></iframe>',
      team: 'warriors',
      quantity: 1,
    },
    {
      id: 6,
      name: 'Dallas Mavericks Shorts',
      price: '£31',
      imageUrl: '<iframe src="https://giphy.com/embed/QmAd1Yyx2beOZU20ZR" class="product-image" frameBorder="0" allowFullScreen></iframe>',
      team: 'mavericks',
      quantity: 1,
    },
    {
      id: 7,
      name: 'Phoenix Suns Shoes',
      price: '£100',
      imageUrl: '<iframe src="https://giphy.com/embed/qcd2RWLmFwQOOFiJ5B" class="product-image" frameBorder="0" allowFullScreen></iframe>',
      team: 'suns',
      quantity: 1,
    },
    {
      id: 8,
      name: 'Golden State Warriors Shoes',
      price: '£105',
      imageUrl: '<iframe src="https://giphy.com/embed/TKvZ8O5UKvNn5Y5HA5" class="product-image" frameBorder="0" allowFullScreen></iframe>',
      team: 'warriors',
      quantity: 1,
    },
  ]);

  const { addToCart } = useContext(CartContext);

  const handleQuantityChange = (id, value) => {
    setProducts(products.map(product => product.id === id ? { ...product, quantity: value } : product));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className={`product-item ${product.team}`}>
          <div dangerouslySetInnerHTML={{ __html: product.imageUrl }}></div>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <div className="product-quantity">
            <button onClick={() => handleQuantityChange(product.id, Math.max(1, product.quantity - 1))}>-</button>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(product.id, Math.max(1, parseInt(e.target.value) || 1))}
            />
            <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
          </div>
          <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

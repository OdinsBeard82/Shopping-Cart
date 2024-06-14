import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, addItemToCart, removeItemFromCart, setItemQuantity } = useContext(CartContext);

  const handleQuantityChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity)) {
      setItemQuantity(itemId, newQuantity);
    }
  };

  const incrementQuantity = (itemId) => {
    setItemQuantity(itemId, cartItems.find(item => item.id === itemId).quantity + 1);
  };

  const decrementQuantity = (itemId) => {
    const currentItem = cartItems.find(item => item.id === itemId);
    if (currentItem.quantity > 1) {
      setItemQuantity(itemId, currentItem.quantity - 1);
    }
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>
                Quantity: 
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(e, item.id)} />
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => addItemToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

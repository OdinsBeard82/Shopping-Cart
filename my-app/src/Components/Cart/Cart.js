import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('£', '')), 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div dangerouslySetInnerHTML={{ __html: item.imageUrl }}></div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: £{calculateTotal()}</p>
            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

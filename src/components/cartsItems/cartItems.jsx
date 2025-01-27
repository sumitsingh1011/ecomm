import React, { useContext } from 'react';
import './cartitem.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, removeTocart } = useContext(ShopContext);

  // Calculate total price of the cart
  const getCartTotal = () => {
    return all_product.reduce((total, product) => {
      if (cartItems[product.id] > 0) {
        return total + product.new_price * cartItems[product.id];
      }
      return total;
    }, 0).toFixed(2);
  };

  const subtotal = getCartTotal();
  const total = subtotal; // Add shipping if needed

  return (
    <div className="cartitems">
      {/* Cart Header */}
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* Cart Items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitem-format">
                <img src={e.image} alt={e.name} className="carticon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                <img
                  src={remove_icon}
                  alt="Remove item"
                  onClick={() => removeTocart(e.id)}
                  className="remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* Cart Summary & Promo Section */}
      <div className="cart-summary">
        {/* Left Side - Total Section */}
        <div className="cart-total-section">
          <div className="cart-total">
            <p><strong>Subtotal:</strong></p>
            <p>${subtotal}</p>
          </div>
          <hr />
          <div className="cart-total">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cart-total final-total">
            <h3>Total</h3>
            <h3>${total}</h3>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>

        {/* Right Side - Promo Code Section */}
        <div className="cartitem-promocode">
          <p>If you have a promo code, enter it here:</p>
          <div className="promo-box">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

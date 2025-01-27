import React, { createContext, useState } from 'react';
import all_product from '../components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  return all_product.reduce((cart, product) => {
    cart[product.id] = 0; // Ensure consistent `id` usage
    return cart;
  }, {});
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add to cart function
  const addTocart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Ensure undefined values don't cause issues
    }));
  };

  // Remove from cart function
  const removeTocart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0), // Prevent negative values
    }));
  };

  // Get total cart value
  const getTotalCartvalue = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      if (quantity > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(itemId));
        if (itemInfo) {
          total += itemInfo.new_price * quantity;
        }
      }
      return total;
    }, 0);
  };

  const gettotalCartitem =()=>{
       let totalitem=0;
       for(const item in cartItems){
        if (cartItems[item]>0){
          totalitem+=cartItems[item]
        }
       }
       return totalitem;
  }

  const contextValue = { gettotalCartitem,all_product, cartItems, addTocart, removeTocart, getTotalCartvalue };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;

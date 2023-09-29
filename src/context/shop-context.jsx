import { createContext, useState } from "react";
import { PRODUCTS } from "../products";
import { Product } from "../pages/shop/product";

export const ShopContext = createContext(null);

function getDefaultCart() {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
}

function ShopContextProvider(props) {
  const [cartItems, setCarItems] = useState(getDefaultCart());

  function getTotalAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  function addToCart(itemId) {
    setCarItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeFromCart(itemId) {
    setCarItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function updateCartItemAmount(newAmount, itemId) {
    setCarItems((prev) => ({ ...prev, [itemId]: newAmount }));
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemAmount,
    getTotalAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;

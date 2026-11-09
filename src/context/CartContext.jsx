// Cart state — starter. Your logic goes here.
import { createContext, useContext } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // TODO 1: Keep cart items in state: [{ product, qty }].
  // TODO 2: addToCart(product) — same product twice bumps qty, not a new row.
  // TODO 3: removeFromCart(id), updateQty(id, qty).
  // TODO 4: total = sum(price * qty). Persist the cart to localStorage.
  const value = {
    items: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateQty: () => {},
    total: 0,
    count: 0,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}

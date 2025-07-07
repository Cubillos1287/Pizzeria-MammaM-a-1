import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((cartPizza) => cartPizza.id === pizza.id);
      if (existingPizza) {
        return prevCart.map((cartPizza) =>
          cartPizza.id === pizza.id
            ? { ...cartPizza, count: cartPizza.count + 1 }
            : cartPizza
        );
      }
      return [...prevCart, { ...pizza, count: 1 }];
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.filter((cartPizza) => cartPizza.id !== pizzaId || cartPizza.count > 1)
        .map((cartPizza) =>
          cartPizza.id === pizzaId && cartPizza.count > 1
            ? { ...cartPizza, count: cartPizza.count - 1 }
            : cartPizza
        )
    );
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
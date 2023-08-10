import { ReactNode, createContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  priceId: string;
  price: string;
}

interface CartContextData {
  items: CartItem[];
  addItemToCart(item: CartItem): void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItemToCart(item: CartItem) {
    const isAlreadyInCart = items.some((e) => e.id === item.id);

    if (!isAlreadyInCart) setItems((state) => [...state, item]);
  }

  return (
    <CartContext.Provider value={{ items, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

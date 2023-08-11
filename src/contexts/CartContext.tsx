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
  isVisible: boolean;
  addItemToCart(item: CartItem): void;
  showCart(): void;
  hideCart(): void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  function addItemToCart(item: CartItem) {
    const isAlreadyInCart = items.some((e) => e.id === item.id);

    if (!isAlreadyInCart) setItems((state) => [...state, item]);
  }

  function showCart() {
    setIsVisible(true);
  }

  function hideCart() {
    setIsVisible(false);
  }

  return (
    <CartContext.Provider
      value={{ items, isVisible, addItemToCart, showCart, hideCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

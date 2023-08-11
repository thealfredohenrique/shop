import { ReactNode, createContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  priceId: string;
  price: number;
}

interface CartContextData {
  items: CartItem[];
  isVisible: boolean;
  addItemToCart(item: CartItem): void;
  removeItemFromCart(itemId: string): void;
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

  function removeItemFromCart(itemId: string) {
    setItems((state) => state.filter((item) => item.id !== itemId));
  }

  function showCart() {
    setIsVisible(true);
  }

  function hideCart() {
    setIsVisible(false);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isVisible,
        addItemToCart,
        removeItemFromCart,
        showCart,
        hideCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

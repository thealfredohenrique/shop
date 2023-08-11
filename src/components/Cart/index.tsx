import { useContext } from "react";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { CartContext } from "../../contexts/CartContext";
import { priceFormatter } from "../../utils/formatters";
import { CartContainer, CartItem } from "./styles";

export default function Cart() {
  const { items, isVisible, removeItemFromCart, hideCart } =
    useContext(CartContext);
  const cartTotal = items.reduce((acc, item) => acc + item.price, 0);

  if (!isVisible) return <></>;

  function handleHideCart() {
    hideCart();
  }

  return (
    <CartContainer>
      <header>
        <button onClick={handleHideCart}>
          <X size={24} weight="bold" />
        </button>
      </header>

      <h1>Sacola de compras</h1>

      <ul>
        {items.map((item) => (
          <CartItem key={item.id}>
            <Image src={item.imageUrl} alt="" height={76} width={76} />
            <div>
              <h2>{item.name}</h2>
              <strong>{priceFormatter.format(item.price)}</strong>
              <button onClick={() => removeItemFromCart(item.id)}>
                Remover
              </button>
            </div>
          </CartItem>
        ))}
      </ul>

      <footer>
        <div>
          <span>Quantidade</span>
          <span>
            {items.length} {items.length === 1 ? "item" : "itens"}
          </span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>{priceFormatter.format(cartTotal)}</strong>
        </div>
        <button>Finalizar compra</button>
      </footer>
    </CartContainer>
  );
}

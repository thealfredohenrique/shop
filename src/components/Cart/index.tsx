import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { X } from "@phosphor-icons/react";
import { CartContext } from "../../contexts/CartContext";
import { priceFormatter } from "../../utils/formatters";
import { CartContainer, CartItem } from "./styles";

export default function Cart() {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
  const { isFallback } = useRouter();
  const { items, isVisible, removeItemFromCart, hideCart } =
    useContext(CartContext);
  const cartTotal = items.reduce((acc, item) => acc + item.price, 0);

  if (!isVisible) return <></>;

  function handleHideCart() {
    hideCart();
  }

  async function handleCheckout() {
    try {
      setIsCreatingCheckout(true);
      const response = await axios.post("/api/checkout", {
        items: items.map(({ priceId }) => ({ priceId })),
      });
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (e) {
      setIsCreatingCheckout(false);
      alert("Falha ao redirecionar ao checkout.");
    }
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
              <button
                disabled={isCreatingCheckout}
                onClick={() => removeItemFromCart(item.id)}
              >
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
        <button disabled={isCreatingCheckout} onClick={handleCheckout}>
          {isFallback ? "Finalizando compra..." : "Finalizar compra"}
        </button>
      </footer>
    </CartContainer>
  );
}

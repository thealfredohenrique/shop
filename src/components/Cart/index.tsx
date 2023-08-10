import { X } from "@phosphor-icons/react";
import { CartContainer, CartItem } from "./styles";

export default function Cart() {
  return (
    <CartContainer>
      <header>
        <button>
          <X size={24} weight="bold" />
        </button>
      </header>

      <h1>Sacola de compras</h1>

      <ul>
        <CartItem>
          <img src="" alt="" />
          <div>
            <h2>Camiseta Beyond the Limits</h2>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
        <CartItem>
          <img src="" alt="" />
          <div>
            <h2>Camiseta Beyond the Limits</h2>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
        <CartItem>
          <img src="" alt="" />
          <div>
            <h2>Camiseta Beyond the Limits</h2>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </CartItem>
      </ul>

      <footer>
        <div>
          <span>Quantidade</span>
          <span>3 itens</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>R$ 270,00</strong>
        </div>
        <button>Finalizar compra</button>
      </footer>
    </CartContainer>
  );
}

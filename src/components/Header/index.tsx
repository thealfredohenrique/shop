import { useContext } from "react";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import { CartContext } from "../../contexts/CartContext";
import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";
import { Bag } from "../../styles/pages/app";

export default function Header() {
  const { items, showCart } = useContext(CartContext);
  const cartIsDisabled = items.length === 0;

  function handleShowCart() {
    if (!cartIsDisabled) showCart();
  }

  return (
    <HeaderContainer>
      <Image src={logo.src} width={130} height={52} alt="" />
      <Bag variant="gray" disabled={cartIsDisabled} onClick={handleShowCart}>
        <Handbag size={24} weight="bold" color="#8D8D99" />
        {items.length > 0 && <span>{items.length}</span>}
      </Bag>
    </HeaderContainer>
  );
}

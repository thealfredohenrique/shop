import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Handbag } from "@phosphor-icons/react";
import { CartContext } from "../../contexts/CartContext";
import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";
import { Bag } from "../../styles/pages/app";

export default function Header() {
  const { items, showCart } = useContext(CartContext);

  function handleShowCart() {
    showCart();
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logo.src} width={130} height={52} alt="" />
      </Link>
      <Bag variant="gray" onClick={handleShowCart}>
        <Handbag size={24} weight="bold" />
        {items.length > 0 && <span>{items.length}</span>}
      </Bag>
    </HeaderContainer>
  );
}

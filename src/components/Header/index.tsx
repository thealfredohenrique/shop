import { useContext } from "react";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import { CartContext } from "../../contexts/CartContext";
import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";
import { Bag } from "../../styles/pages/app";

export default function Header() {
  const { items } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Image src={logo.src} width={130} height={52} alt="" />
      <Bag variant="gray">
        <Handbag size={24} weight="bold" color="#8D8D99" />
        <span>{items.length}</span>
      </Bag>
    </HeaderContainer>
  );
}

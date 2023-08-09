import { AppProps } from "next/app";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import { globalStyles } from "../styles/global";
import { Bag, Container, Header } from "../styles/pages/app";
import logo from "../assets/logo.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo.src} width={130} height={52} alt="" />
        <Bag>
          <Handbag size={24} weight="bold" color="#8D8D99" />
        </Bag>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

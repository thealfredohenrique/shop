import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import firstShirt from "../assets/1.png";
import secondShirt from "../assets/2.png";
import thirdShirt from "../assets/3.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={firstShirt} width={390} height={360} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={firstShirt} width={390} height={360} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "../styles/pages/home";
import firstShirt from "../assets/1.png";
import secondShirt from "../assets/2.png";
import thirdShirt from "../assets/3.png";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={firstShirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={secondShirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={thirdShirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={thirdShirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

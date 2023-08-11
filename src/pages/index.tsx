import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import Stripe from "stripe";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { priceFormatter } from "../utils/formatters";
import { HomeContainer, Product } from "../styles/pages/home";
import { Bag } from "../styles/pages/app";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Product
            key={product.id}
            href={`/product/${product.id}`}
            className="keen-slider__slide"
            prefetch={false}
          >
            <Image src={product.imageUrl} width={401} height={401} alt="" />

            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{priceFormatter.format(product.price)}</span>
              </div>
              <Bag variant="green">
                <Handbag size={24} weight="bold" />
              </Bag>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};

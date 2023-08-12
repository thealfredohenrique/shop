import { useContext } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { CartContext } from "../../contexts/CartContext";
import { priceFormatter } from "../../utils/formatters";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    priceId: string;
    price: number;
    description: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { items, addItemToCart } = useContext(CartContext);
  const isAlreadyInCart = items.some((e) => e.id === product.id);

  function handleAddProductToCart() {
    addItemToCart(product);
  }

  return (
    <>
      <Head>
        <title>{product.name} | Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={401} height={401} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormatter.format(product.price)}</span>

          <p>{product.description}</p>

          <button disabled={isAlreadyInCart} onClick={handleAddProductToCart}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_OILbIX5ZLbMolQ" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        priceId: price.id,
        price: price.unit_amount / 100,
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};

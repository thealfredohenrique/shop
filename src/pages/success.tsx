import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.id}>
              <Image src={product.imageUrl} width={120} height={102} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length}{" "}
          {products.length === 1 ? "camiseta" : "camisetas"} já está a caminho
          da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });
  const customerName = session.customer_details.name;
  const products = session.line_items.data.map(
    (e) => e.price.product as Stripe.Product
  );

  return {
    props: {
      customerName,
      products: products.map((product) => ({
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
      })),
    },
  };
};

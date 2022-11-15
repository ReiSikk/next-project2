import Anchor from "../components/Anchor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ProductList</title>
      </Head>
      <h1>
        <Anchor href="/products/product">View products</Anchor>
      </h1>
    </>
  );
}

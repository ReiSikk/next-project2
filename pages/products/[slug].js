import Head from "next/head";
export default function Product({ data }) {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <h1>{data.productdisplayname}</h1>
      <h2>{data.brandname}</h2>
      <p>{data.price}</p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`} alt="something" />
    </>
  );
}

//somewhat working thing
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const res = await fetch("https://kea-alt-del.dk/t7/api/products/" + slug);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  console.log("this is the context:", context);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://kea-alt-del.dk/t7/api/products/");
  const data = await res.json();
  console.log("data:", data);
  //this is the same as hardcoding it below.
  const paths = data.map((product) => {
    return { params: { slug: product.id.toString() } };
  });
  return {
    //same as this
    /*  paths: [{ params: { slug: "steve" } }, { params: { slug: "henry" } }, { params: { slug: "bufas" } }], */
    paths,
    fallback: false,
  };
}

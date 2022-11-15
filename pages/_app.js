import "../styles/globals.css";
import Layout from "../components/Layout";
import App from "next/app";

function MyApp({ Component, pageProps, navData }) {
  return (
    <>
      <Layout navData={navData}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch("https://kea-alt-del.dk/t7/api/products/");
  const navData = await res.json();
  return { ...appProps, navData };
};

export default MyApp;

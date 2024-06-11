//paages/risk.js
import Head from "next/head";
import Header from "../components/header";
import TopRisk from "../components/topRisk";
import { getTopData } from "@/utils/getTopData";
import styles from "@/styles/Home.module.css";

export async function getServerSideProps() {
  const result = await getTopData();

  return {
    props: {
      result
    }
  };
}

export default function Risk({ result }) {
  return (
    <>
      <Head>
        <title>Top Risk Addresses</title>
        <meta name="description" content="Top Risk Addresses Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        <Header />
        <TopRisk result={result} />
      </section>
    </>
  );
}

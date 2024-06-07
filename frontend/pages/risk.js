import Head from "next/head";
import Header from "../components/header.js";
import styles from "@/styles/Home.module.css";
import TopRisk from "@/components/topRisk.js";
import { fetchBlacklistData, getBlacklistData } from '../utils/blacklist'; // Adjust the path as necessary

export async function getServerSideProps() {
  await fetchBlacklistData();
  const blacklistData = getBlacklistData();

  // Mock function to generate random risk data
  const generateRandomRiskData = (hash, type) => {
    const riskLevels = ["High Risk", "Medium Risk", "Low Risk", "Critical Risk"];
    const riskLevel = riskLevels[Math.floor(Math.random() * riskLevels.length)];
    const value = Math.random() * 10 * 10 ** 18;
    const listedDate = new Date().toISOString().split('T')[0];
    return {
      hash,
      decoded_call: { label: riskLevel },
      Risk_Level: riskLevel,
      Listed_Date: listedDate,
      Risk_Driver: type,
      block_timestamp: listedDate
    };
  };

  const addressBlacklist = blacklistData.address;
  const domainBlacklist = blacklistData.domains;

  const addresses = addressBlacklist.slice(0, 10).map(address => generateRandomRiskData(address, "address"));
  const domains = domainBlacklist.slice(0, 10).map(domain => generateRandomRiskData(domain, "domain"));

  return {
    props: {
      result: {
        addresses,
        domains
      }
    }
  };
}

export default function Risk({ result }) {
  return (
    <>
      <Head>
        <title>Top</title>
        <meta name="description" content="Risk Page" />
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

// HeroSection.js
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import styles from "@/styles/Home.module.css";
import {
  faCube,
  faGauge,
  faGlobe,
  faServer,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CChart from "./cryptoChart";

export default function HeroSection() {
  const [showResult, setShowResult] = useState(true);
  const [blockResult, setBlockResult] = useState([]);
  const [transactionsResult, setTransactionsResult] = useState([]);
  const [ethPrice, setEthPrice] = useState("");
  const [totalTransactions, setTotalTransactions] = useState("");
  const [latestBlock, setLatestBlock] = useState("");
  const [chartData, setChartData] = useState({
    labels: [],
    ethereum: [],
    bnb: [],
    polygon: [],
  });

  useEffect(() => {
    const getEthPrice = async () => {
      const response = await axios.get(`http://localhost:5001/getethprice`, {});
      setEthPrice(response.data.usdPrice);
    };

    const getBlockInfo = async () => {
      const response = await axios.get(
        `http://localhost:5001/getblockinfo`,
        {}
      );
      const blockArray = [
        response.data.previousBlockInfo[1],
        response.data.previousBlockInfo[2],
        response.data.previousBlockInfo[3],
        response.data.previousBlockInfo[4],
        response.data.previousBlockInfo[5],
      ];

      const transactions = [response.data.previousBlockInfo[0].transactions];

      setTotalTransactions(
        response.data.previousBlockInfo[1].totalTransactions
      );
      setLatestBlock(response.data.latestBlock);
      setBlockResult(blockArray);
      setTransactionsResult(response.data.previousBlockInfo[0].transactions);
    };

    const fetchChartData = async () => {
      const [ethRes, bnbRes, polygonRes] = await Promise.all([
        axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=30'),
        axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BNB&tsym=USD&limit=30'),
        axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=MATIC&tsym=USD&limit=30'),
      ]);

      const labels = ethRes.data.Data.Data.map((price) => moment.unix(price.time).format('MMM DD'));
      const ethereum = ethRes.data.Data.Data.map((price) => price.close);
      const bnb = bnbRes.data.Data.Data.map((price) => price.close);
      const polygon = polygonRes.data.Data.Data.map((price) => price.close);

      console.log({ labels, ethereum, bnb, polygon });

      setChartData({ labels, ethereum, bnb, polygon });
    };

    getEthPrice();
    getBlockInfo();
    fetchChartData();
  }, []);

  return (
    <section className={styles.heroSectionContainer}>
      {showResult && (
        <section>
          <section className={styles.latestResults_header}>
            <section>
              <section className={styles.latestResults_box}>
                <section className={styles.svgSection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 417"
                    preserveAspectRatio="xMidYMid"
                    className={styles.svgEth}
                  >
                    <path
                      fill="#fff"
                      d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
                    />
                    <path
                      fill="#fff"
                      d="M127.962 0L0 212.32l127.962 75.639V154.158z"
                    />
                    <path
                      fill="#fff"
                      d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
                    />
                    <path fill="#fff" d="M127.962 416.905v-104.72L0 236.585z" />
                    <path
                      fill="#eee"
                      d="M127.961 287.958l127.96-75.637-127.96-58.162z"
                    />
                    <path fill="#bbb" d="M0 212.32l127.96 75.638v-133.8z" />
                  </svg>
                </section>
                <section className={styles.hero_box}>
                  <p>Ether price</p>
                  <p className={styles.heroValues}>
                    ${Number(ethPrice).toFixed(2)}
                  </p>
                </section>
              </section>
              <span className={styles.divider}></span>
              <section className={styles.latestResults_box}>
                <section className={styles.svgSection}>
                  <FontAwesomeIcon icon={faGlobe} className={styles.svgIcons} />
                </section>
                <section className={styles.hero_box}>
                  <p>Market cap</p>
                  <p className={styles.heroValues}>$196,968,104,207.00</p>
                </section>
              </section>
            </section>
            <section>
              <section className={styles.latestResults_box}>
                <section className={styles.svgSection}>
                  <FontAwesomeIcon
                    icon={faServer}
                    className={styles.svgIcons}
                  />
                </section>
                <section className={styles.hero_box}>
                  <p>Transactions</p>
                  <p className={styles.heroValues}>{totalTransactions}</p>
                </section>
              </section>
              <span className={styles.divider}></span>
              <section className={styles.latestResults_box}>
                <section className={styles.svgSection}>
                  <FontAwesomeIcon icon={faGauge} className={styles.svgIcons} />
                </section>
                <section className={styles.hero_box}>
                  <p>Last finalized block</p>
                  <p className={styles.heroValues}>{latestBlock}</p>
                </section>
              </section>
            </section>
            <section>
              <section className={styles.hero_averageValue}>
                <p>Average Transaction Value</p>
                <CChart data={chartData} />
              </section>
            </section>
          </section>
          <section className={styles.latestResults_body}>
            <section>
              <section className={styles.latestResults_body_title}>
                Latest Blocks
              </section>
              <table className={styles.latestResults_body_table}>
                <tbody>
                  {blockResult.map((block) => (
                    <tr
                      className={`${styles.latestResults_body_tr} ${
                        blockResult.indexOf(block) === blockResult.length - 1 &&
                        styles.lastTd
                      }`}
                      key={block.blockNumber}
                    >
                      <td className={styles.tdIcon}>
                        <FontAwesomeIcon icon={faCube} />
                      </td>
                      <td className={styles.tdBlock}>
                        <section className={styles.blueText}>
                          {block.blockNumber}
                        </section>
                        <section>
                          {moment(block.time, "YYYYMMDD").fromNow()}
                        </section>
                      </td>
                      <td className={styles.tdTxns}>
                        <section>
                          Fee Recipient{" "}
                          <span className={styles.blueText}>
                            {block.miner.slice(0, 6)}...
                            {block.miner.slice(36)}
                          </span>
                        </section>
                        <section>
                          <span className={styles.blueText}>
                            {block.totalTransactions} txns
                          </span>
                        </section>
                      </td>
                      <td className={styles.tdValue}>{block.gasUsed} Eth</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <section>
              <section className={styles.latestResults_body_title}>
                Latest Transactions
              </section>
              <table className={styles.latestResults_body_table}>
                <tbody>
                  {transactionsResult.map((txn) => (
                    <tr
                      className={`${styles.latestResults_body_tr} ${
                        transactionsResult.indexOf(txn) ===
                          transactionsResult.length - 1 && styles.lastTd
                      }`}
                      key={txn.transactionHash}
                    >
                      <td className={styles.tdContract}>
                        <FontAwesomeIcon
                          icon={faFileContract}
                          className={styles.tdContract}
                        />
                      </td>
                      <td className={styles.tdBlock}>
                        <section className={styles.blueText}>
                          {txn.transactionHash?.slice(0, 14)}...
                        </section>
                        <section>
                          {moment(txn.time, "YYYYMMDD").fromNow()}
                        </section>
                      </td>
                      <td className={styles.tdFromTo}>
                        <section>
                          From{" "}
                          <span className={styles.blueText}>
                            {txn.fromAddress?.slice(0, 6)}...
                            {txn.fromAddress?.slice(36)}
                          </span>
                        </section>
                        <section>
                          To{" "}
                          <span className={styles.blueText}>
                            {txn.toAddress?.slice(0, 6)}...
                            {txn.toAddress?.slice(36)}
                          </span>
                          <span className={styles.blueText}>
                            {txn.totalTransactions}
                          </span>
                        </section>
                      </td>
                      <td className={styles.tdValue}>
                        {(Number(txn.value) / 10 ** 18).toFixed(4)} Eth
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </section>
        </section>
      )}
    </section>
  );
}

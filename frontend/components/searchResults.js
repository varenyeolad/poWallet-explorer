// searchResults.js
import styles from "@/styles/Home.module.css";
import Image from 'next/image';
import veryhigh from '../public/assets/risksImg/veryHighRisk.png';
import high from '../public/assets/risksImg/highRisk.png';
import medium from '../public/assets/risksImg/mediumRisk.png'
import low from '../public/assets/risksImg/lowRisk.png'
import verylow from '../public/assets/risksImg/veryLowRisk.png';

export default function SearchResults({ result }) {  
  let riskimage = null;

  switch (result.overall_assessment) {
    case 'Very High Risk':
      riskimage = veryhigh;
      break
    case 'High Risk':
      riskimage = high;
      break
    case 'Medium Risk':
      riskimage = medium;
      break
    case 'Low Risk':
      riskimage = low;
      break
    case 'Very Low Risk':
      riskimage = verylow;
      break
    default:
      riskimage = verylow;
  }

  return (
    <section className={styles.searchResultsContent}>
      <section className={styles.searchResults}>
        <Image src={riskimage} alt="Risk Assessment Image" style={{position:"relative", width:"100%", height:"auto"}}/>
      </section>
      <section className={styles.searchResults}>
        <h2 className={styles.resultTitle}>Risk Assessment</h2>
        <p className={styles.amountOfTransactions}>
          Risk assessment for address: {" "}
          <a 
            href={`https://etherscan.io/address/${result.address}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.blueText}
          >
            {result.address}
          </a>
        </p>
        <section className={styles.riskInfo}>
          {result.risk_score !== undefined && (
            <section className={styles.riskItem}>
              <h3>Risk Score</h3>
              <p className={styles.blueText}>{result.risk_score}</p>
            </section>
          )}
          {result.risk_reason && (
            <section className={styles.riskItem}>
              <h3>Risk Reason</h3>
              <p className={styles.blueText}>{result.risk_reason}</p>
            </section>
          )}
          {result.overall_assessment && (
            <section className={styles.riskItem}>
              <h3>Overall Assessment</h3>
              <p className={styles.blueText}>{result.overall_assessment}</p>
            </section>
          )}
          {result.total_transactions !== undefined && (
            <section className={styles.riskItem}>
              <h3>Total Transactions</h3>
              <p className={styles.blueText}>{result.total_transactions}</p>
            </section>
          )}
          {result.total_received !== undefined && (
            <section className={styles.riskItem}>
              <h3>Total Received</h3>
              <p className={styles.blueText}>{result.total_received.toFixed(5)} ETH</p>
            </section>
          )}
          {result.total_sent !== undefined && (
            <section className={styles.riskItem}>
              <h3>Total Sent</h3>
              <p className={styles.blueText}>{result.total_sent.toFixed(5)} ETH</p>
            </section>
          )}
          {result.current_balance !== undefined && (
            <section className={styles.riskItem}>
              <h3>Current Balance</h3>
              <p className={styles.blueText}>{result.current_balance.toFixed(5)} ETH</p>
            </section>
          )}
          {result.blacklist_category && (
            <section className={styles.riskItem}>
              <h3>Blacklist Category</h3>
              <p className={styles.blueText}>{result.blacklist_category}</p>
            </section>
          )}
          {result.blacklist_search_result && (
            <section className={styles.riskItem}>
              <h3>Blacklist Search Result</h3>
              <p className={styles.blueText}>{result.blacklist_search_result}</p>
            </section>
          )}
          {result.phishing_dataset_check && (
            <section className={styles.riskItem}>
              <h3>Phishing Dataset Check</h3>
              <p className={styles.blueText}>{result.phishing_dataset_check}</p>
            </section>
          )}
          {result.transaction_tracing_result && (
            <section className={styles.riskItem}>
              <h3>Transaction Tracing Result</h3>
              <p className={styles.blueText}>{result.transaction_tracing_result}</p>
            </section>
          )}
          {result.whitelist_search_result && (
            <section className={styles.riskItem}>
              <h3>Whitelist Search Result</h3>
              <p className={styles.blueText}>{result.whitelist_search_result}</p>
            </section>
          )}
          {result.ml_analysis_result && (
            <section className={styles.riskItem}>
              <h3>ML Analysis Result</h3>
              <p className={styles.blueText}>{result.ml_analysis_result}</p>
            </section>
          )}
          {result.top_features_influencing_ml_analysis && (
            <section className={styles.riskItem}>
              <h3>Top Features Influencing ML Analysis</h3>
              <p className={styles.blueText}>{result.top_features_influencing_ml_analysis}</p>
            </section>
          )}
        </section>
      </section>
    </section>
  );
}

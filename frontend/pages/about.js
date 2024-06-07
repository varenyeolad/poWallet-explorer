import Head from "next/head";
import Header from "../components/header.js";
import styles from "@/styles/Home.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1>Get easy and safe access to your crypto assets with poWallet</h1>
            <p>Experience seamless transactions, advanced security features, and privacy by design. Enjoy the convenience of managing your digital assets across multiple blockchains with our user-friendly interface.</p>
            <button className={styles.downloadButton}>Download now</button>
          </div>
          <div className={styles.imageContent}>
            <img src="assets\wallet.png" alt="poWallet App" className={styles.heroImage} />
          </div>
        </div>
      </section>


      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <img src="assets\icons\wallet_icon.png" alt="Self-custodial Icon" />
          </div>
          <h3>Self-custodial</h3>
          <p>Self-custodial means you control your funds. We never have access.</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <img src="assets\icons\fingerprint.png" alt="Private by design Icon" />
          </div>
          <h3>Private by design</h3>
          <p>No name, email, or phone number required.</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <img src="assets\icons\alert-circle.png" alt="Scam detection Icon" />
          </div>
          <h3>Scam detection</h3>
          <p>Scam detection flags malicious transactions instantly.</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <img src="assets\icons\brush.png" alt="User-Friendly Interface Icon" />
          </div>
          <h3>User-Friendly Interface</h3>
          <p>Easily manage digital assets with our simple interface.</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <img src="assets\icons\shield.png" alt="Seamless Integration Icon" />
          </div>
          <h3>Seamless Integration</h3>
          <p>Integrates smoothly with multiple blockchains and DeFi protocols.</p>
        </div>
      </section>


      <section className={styles.stabilitySection}>
        <h2>
          <span className={styles.highlightBlue}>Stability</span>
           & reliability
          <span className={styles.lineBreak}></span>
          is what we <span className={styles.highlightGreen}>offer</span>
        </h2>
        <p>Controlled by you, secured by us</p>
      </section>


      <section className={styles.featuresInfo}>
        <div className={styles.featuresInfoSubblock1}>
          <div className={styles.featuresInfoText}>
            <h2>All of the user-friendly features are readily available to assist you</h2>
            <ul>
              <li>
                <span className={styles.featureBadgeBlack}>Buy & Sell</span>
                <span className={styles.featureBadgeGreen}>Multiple chains, one wallet. No more switching.</span>
              </li>
              <li>
                <span className={styles.featureBadgeBlack}>Monitor activity with transaction history and notifications.</span>
              </li>
              <li>
                <span className={styles.featureBadgeBlack}>No limits on tokens, balances, or transactions.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.featuresInfoSubblock2}>
          <div className={styles.featuresInfoImage}>
            <img src="assets\wallet.png" alt="Crypto Wallet" className={styles.cryptoWalletImage} />
          </div>
        </div>
      </section>
      
      <section className={styles.benefits}>
        <div className={styles.benefitsText}>
          <h2>We guarantee the safety and security of your investments</h2>
          <p>Our project created a secure, user-friendly cryptocurrency wallet using advanced APIs for enhanced security and efficiency.</p>
          <p>With the latest encryption standards and an intuitive interface, it ensures safe, seamless digital asset management.</p>
       </div>

       <div className={styles.featuresInfoImage}>
            <img src="assets\benefits.png" alt=" Benefits" className={styles.cryptoWalletImage} />
          </div>

      </section>

      <section className={styles.footer}>
        <h2>Start using poWallet now!</h2>
        <div className={styles.footerButtons}>
          <button className={styles.downloadButton}>Download now</button>
          <button className={styles.viewDemoButton}>View demo video</button>
          </div>
      </section>



      

    </>
  );
}

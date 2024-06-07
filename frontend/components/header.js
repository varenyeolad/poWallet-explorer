import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

import Logo from "../public/assets/logo.png";

export default function Header() {
  const [ethPrice, setEthPrice] = useState("");

  useEffect(() => {
    const getEthPrice = async () => {
      const response = await axios.get("http://localhost:5001/getethprice", {});
      setEthPrice(response.data.usdPrice);
    };
    getEthPrice();
  }, []);

  return (
    <section className={styles.header}>
      <section className={styles.navbar}>
        <Image src={Logo} alt="Etherscan Logo" className={styles.logo} />
        <section className={styles.menu}>
          <Link href="/" className={styles.menuLink}>
            Home
          </Link>
          <Link href="/about" className={styles.menuLink}>
            About
          </Link>
          <Link href="/risk" className={styles.menuLink}>
            Top risk
          </Link>
          <Link href="/docs" className={styles.menuLink}>
            API
          </Link>
          <Link href="/report" className={styles.menuLink}>
            Report
          </Link>
        </section>
      </section>
    </section>
  );
}

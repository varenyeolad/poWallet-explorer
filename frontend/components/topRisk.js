import { useState } from "react";
import moment from "moment";
import styles from "@/styles/Home.module.css";

const riskLevelClass = (level) => {
  switch (level) {
    case "High Risk":
      return styles.highRisk;
    case "Medium Risk":
      return styles.mediumRisk;
    case "Low Risk":
      return styles.lowRisk;
    case "Critical Risk":
      return styles.criticalRisk;
    default:
      return "";
  }
};

export default function TopRisk(props) {
  const [selectedType, setSelectedType] = useState("Addresses");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("All");

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleRiskLevelChange = (e) => {
    setSelectedRiskLevel(e.target.value);
  };

  let data = [];
  if (selectedType === "Addresses") {
    data = props.result.addresses;
  } else if (selectedType === "Domains") {
    data = props.result.domains;
  } else {
    data = [...props.result.addresses, ...props.result.domains];
  }

  if (selectedRiskLevel !== "All") {
    data = data.filter(txn => txn.Risk_Level === selectedRiskLevel);
  }

  return (
    <div id="bg">
      <section className={styles.riskResults}>
        <p className={styles.riskTitle}>Top Risk {selectedType}</p>
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownWrapper}>
            <select onChange={handleTypeChange} value={selectedType} className={styles.dropdown}>
              <option value="Both">All Categories</option>
              <option value="Addresses">Addresses</option>
              <option value="Domains">Domains</option> 
            </select>
          </div>
          <div className={styles.dropdownWrapper}>
            <select onChange={handleRiskLevelChange} value={selectedRiskLevel} className={styles.dropdown}>
              <option value="All">All Risk Levels</option>
              <option value="High Risk">High Risk</option>
              <option value="Medium Risk">Medium Risk</option>
              <option value="Low Risk">Low Risk</option>
              <option value="Critical Risk">Critical Risk</option>
            </select>
          </div>
        </div>
        <table className={styles.riskSection}>
          <thead>
            <tr className={styles.riskTitle}>
              <th>dApps</th>
              <th>Risk Level</th>
              <th className={styles.blueText}>Listed Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((txn) => (
              <tr className={styles.risk} key={txn.hash}>
                <td className={styles.blueText}>{txn.hash}</td>
                <td className={riskLevelClass(txn.Risk_Level)}>
                  {txn.Risk_Level}
                </td>
                <td>{moment(txn.Listed_Date).fromNow()}</td>
                <td className={riskLevelClass(txn.Risk_Driver)}>
                  {txn.Risk_Driver}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

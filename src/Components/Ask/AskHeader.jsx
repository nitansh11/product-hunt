import React from "react";
import styles  from "./AskHeader.module.css";

const AskHeader = () => {
  return <div className={styles.AskHeader}>
      <h2>Ask Product Hunt</h2>
      <p>Ask the Product Hunt community for their product recommendations and advice.</p>
  </div>;
};

export default AskHeader;

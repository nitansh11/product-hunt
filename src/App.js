import React from "react";
import styles from "./App.module.css";
import Deals from "./Components/Deals/Deals";
const App = () => {
  return (
    <div className={styles.App}>
      <h1>App</h1>
      <Deals />
    </div>
  );
};

export default App;

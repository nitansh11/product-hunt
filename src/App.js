import React from "react";
import styles from "./App.module.css";
import Deals from "./Components/Deals/Deals";
import Mentors from "./Components/Mentors/Mentors"
const App = () => {
  return (
    <div className={styles.App}>
      <h1>App</h1>
      <Deals />
      <Mentors/>
    </div>
  );
};

export default App;

import React from "react";
import styles from "./App.module.css";
import Deals from "./Components/Deals/Deals";
import { Discussions } from "./Components/Discussions/Discussions";
import Mentors from "./Components/Mentors/Mentors"
const App = () => {
  return (
    <div className={styles.App}>
      <h1>App</h1>
      <Deals />
      <Mentors/>
      <Discussions/>
    </div>
  );
};

export default App;

import React from "react";
import styles from "./App.module.css";

import Mentors from "./Components/Mentors/Mentors"
const App = () => {
  return (
    <div className={styles.App}>
      <Mentors/>
    </div>
  );
};

export default App;

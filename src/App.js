import React from "react";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Routes/Routes";
const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;

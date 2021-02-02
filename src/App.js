import React from "react";
import styles from "./App.module.css";
// import Deals from "./Components/Deals/Deals";
// import Mentors from "./Components/Mentors/Mentors"
import Product from "./Components/Product/Product";
const App = () => {
  return (
    <div className={styles.App}>
      {/* <Deals />
      <Mentors/> */}
      <Product></Product>
    </div>
  );
};

export default App;

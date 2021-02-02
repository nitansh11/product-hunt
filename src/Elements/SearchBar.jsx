import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ placeholder }) => {
  
  return (
    <div className={styles.SearchBar}>
      <i class="fa fa-search" aria-hidden="true"></i>
      <input placeholder={placeholder} type="text" styles={styles} />
    </div>
  );
};

export default SearchBar;

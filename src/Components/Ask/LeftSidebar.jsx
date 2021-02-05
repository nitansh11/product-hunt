import React from "react";
import styles from "./LeftSidebar.module.css";

const LeftSidebar = () => {
  return (
    <div className={styles.LeftSidebar}>
      <p>FEEDS</p>
      <ul>
        <li>
          <span>⭐️</span>Featured
        </li>
        <li>
          <span>🙋</span>Needs Help
        </li>
        <li>
          <span>👶</span>Recent
        </li>
        <li>
          <span>👀</span>Following
        </li>
        <li>
          <span>🏅</span>All Time
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;

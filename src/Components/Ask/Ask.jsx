import React from "react";
import styles from "./Ask.module.css";
import AskHeader from "./AskHeader";
import RightSideBar from "./RightSidebar";
import LeftSideBar from "./LeftSidebar";
import Content from "./Content";
const Ask = () => {
  return (
    <div className={styles.Ask}>
      <div className={styles.Ask__child}>
        <AskHeader />
        <div className={styles.Ask__childContent}>
          <LeftSideBar />
          <Content />
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Ask;

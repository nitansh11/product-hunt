import React from "react";
import styles from "./SingleComment.module.css";
const SingleComment = ({ id, text, email, upvotes }) => {
  return (
    <div className={styles.SingleComment}>
          <img src="http://1.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt=""/>
          <div>
              <h2>Nitansh Rastogi</h2>
              <p>{text}</p>
          </div>
    </div>
  );
};

export default SingleComment;

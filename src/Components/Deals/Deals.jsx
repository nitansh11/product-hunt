import React from "react";
import styles from "./Deals.module.css";
const Deals = () => {
  return (
    <div className={styles.Deals}>
      <div className={styles.Deals__banner}>
        <div className={styles.Deals__bannerEmoji}>✨</div>
        <div className={styles.Deals__bannerHeader}>
          <h1>Founder Club</h1>
          <p>
            Your access to big savings on tools that help kick start your
            business. Join now for access to >$100,000 in savings for only$60/mo
          </p>
        </div>
        <div className={styles.Deals__bannerJoin}>
          <button>JOIN FOUNDER CLUB</button>
          <p>Got an invite code?</p>
        </div>
        <div className={styles.Deals__bannerSort}>
          <p>Sort by:</p>
          <select>
            <option value="">Recommended</option>
            <option value="">Most Popular</option>
            <option value="">Newest</option>
          </select>
          <div className={styles.Deals__bannerSort__Search}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              placeholder="Discover your next favourite thing..."
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;

import React from "react";
import styles from "./JobCard.module.css";
const JobCard = () => {
  return (
    <div className={styles.JobCard}>
      <img
        src="https://ph-files.imgix.net/b2f95681-6d10-4ccb-bc00-2612352726d9.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fill-color=fff&fit=fill&fill=solid"
        alt=""
      />
      <div>
        <div className={styles.JobCard__first}>
          <h2>Duuoo.io</h2>
          <span>💎</span>
        </div>
        <div className={styles.JobCard__second}>
          <div>
            <h3>Product Manager, Duuoo Teams</h3>
            <p>Copenhagen, Denmark</p>
          </div>
          <div>
            <button>SHARE</button>
            <button>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

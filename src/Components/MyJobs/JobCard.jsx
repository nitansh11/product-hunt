import React from "react";
import styles from "./JobCard.module.css";
import { v4 as uuid } from "uuid";
const JobCard = ({ id, avatar, title, role, location, pics, tags }) => {
  return (
    <div className={styles.JobCard}>
      <img
        src={avatar}
        alt="image not available"
      />
      <div>
        <div className={styles.JobCard__first}>
          <h2>{title}</h2>
          <span>{pics}</span>
        </div>
        <div className={styles.JobCard__second}>
          <div>
            <h3>{role}</h3>
            <p>{location}</p>
          </div>
          <div>
            <button>SHARE</button>
            <button>APPLY</button>
          </div>
        </div>
      </div>
      <div className={styles.JobCard__third}>
        {tags.map((tag) => (
          <button key={uuid()}>{tag}</button>
        ))}
      </div>
    </div>
  );
};

export default JobCard;

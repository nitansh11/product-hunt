import React from "react";
import styles from "./JobList.module.css";
import JobCard from "./JobCard";
const JobList = () => {
  return (
    <div className={styles.JobList}>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
};

export default JobList;

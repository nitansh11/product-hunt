import React from "react";
import styles from "./MyJobs.module.css";
import { useSelector, useDispatch } from "react-router-dom";
import JobList from "./JobList";
import JobSidebar from "./JobSidebar";
const MyJobs = () => {
  React.useEffect(() => {}, []);
  return (
    <div className={styles.MyJobs}>
      <div className={styles.MyJobs__child}>
        <h1>Jobs</h1>
        <div>
          <JobList />
          <JobSidebar />
        </div>
      </div>
    </div>
  );
};

export default MyJobs;

import React from "react";
import styles from "./JobList.module.css";
import JobCard from "./JobCard";
import { useSelector, useDispatch } from "react-redux";
import { filterJobs } from "../../utils";
const JobList = () => {
  const filteredJobs = useSelector((state) => state.myJobsReducer.filteredJobs);
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log("filtered jobs in jobs list:", filteredJobs);
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
  const renderJobs = () => {
    return filteredJobs.map((job) => {
      return <JobCard key={job.id} {...job} />;
    });
  };
  return (
    <div className={styles.JobList}>
      {filteredJobs.length === 0 ? (
        <h1>{filteredJobs.length} JOBS FOUND !!!😔</h1>
      ) : (
        <h1>{filteredJobs.length} JOBS FOUND !!!🤩</h1>
      )}
      {renderJobs()}
    </div>
  );
};

export default JobList;

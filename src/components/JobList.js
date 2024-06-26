// JobList.js

import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobs, updateJob, deleteJob }) => {
  return (
    <ul>
      {jobs.map((job) => (
        <JobItem
          key={job._id}
          job={job}
          updateJob={updateJob} // Pass updateJob function to JobItem
          deleteJob={deleteJob}
        />
      ))}
    </ul>
  );
};

export default JobList;

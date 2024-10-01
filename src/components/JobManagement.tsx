import React from 'react';

interface Job {
  id: string;
  title: string;
  // Add other job properties
}

interface JobManagementProps {
  jobs?: Job[];
}

const JobManagement: React.FC<JobManagementProps> = ({ jobs = [] }) => {
  return (
    <div>
      <h2>Job Management</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobManagement;
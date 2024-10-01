import React from 'react';
import { Layout } from '../components/Layout';
import { JobManagement as JobManagementComponent } from '../components/JobManagement';
import { User } from '../types';

interface JobManagementPageProps {
  user: User | null;
}

const JobManagementPage: React.FC<JobManagementPageProps> = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Job Management</h1>
      <JobManagementComponent />
    </Layout>
  );
}

export default JobManagementPage;
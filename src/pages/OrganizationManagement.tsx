import React from 'react';
import { Layout } from '../components/Layout';
import { User } from '../types';

interface OrganizationManagementProps {
  user: User | null;
}

const OrganizationManagement: React.FC<OrganizationManagementProps> = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Organization Management</h1>
      {/* Add your organization management content here */}
    </Layout>
  );
}

export default OrganizationManagement;
import React from 'react';
import { Layout } from '../components/Layout';
import { UserManagement as UserManagementComponent } from '../components/UserManagement';
import { User } from '../types';

interface UserManagementPageProps {
  user: User | null;
}

const UserManagementPage: React.FC<UserManagementPageProps> = ({ user }) => {
  // This is a placeholder. In a real application, you'd fetch the users data from an API.
  const dummyUsers: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ];

  return (
    <Layout user={user}>
      <h1>User Management</h1>
      <UserManagementComponent users={dummyUsers} />
    </Layout>
  );
}

export default UserManagementPage;
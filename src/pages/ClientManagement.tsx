import React from 'react';
import { Layout } from '../components/Layout';
import { ClientManagement as ClientManagementComponent } from '../components/ClientManagement';
import { User, Client } from '../types';

interface ClientManagementPageProps {
  user: User | null;
}

const ClientManagementPage: React.FC<ClientManagementPageProps> = ({ user }) => {
  // This is a placeholder. In a real application, you'd fetch the clients data from an API.
  const dummyClients: Client[] = [
    { id: '1', name: 'John Doe', treatmentStartDate: '2023-01-01', progressTimeline: [] },
    { id: '2', name: 'Jane Smith', treatmentStartDate: '2023-02-15', progressTimeline: [] },
  ];

  return (
    <Layout user={user}>
      <h1>Client Management</h1>
      <ClientManagementComponent clients={dummyClients} />
    </Layout>
  );
}

export default ClientManagementPage;
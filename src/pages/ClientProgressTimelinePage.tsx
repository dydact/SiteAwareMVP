import React from 'react';
import { Layout } from '../components/Layout';
import { ClientProgressTimeline } from '../components/ClientProgressTimeline';
import { User, Client } from '../types';

interface ClientProgressTimelinePageProps {
  user: User | null;
}

const ClientProgressTimelinePage: React.FC<ClientProgressTimelinePageProps> = ({ user }) => {
  // This is a placeholder. In a real application, you'd fetch the client data from an API or pass it as a prop.
  const dummyClient: Client = {
    id: '1',
    name: 'John Doe',
    treatmentStartDate: '2023-01-01',
    progressTimeline: [
      { status: 'completed', description: 'Initial assessment' },
      { status: 'in_progress', description: 'Therapy sessions' },
      { status: 'pending', description: 'Final evaluation' },
    ],
  };

  return (
    <Layout user={user}>
      <h1>Client Progress Timeline</h1>
      <ClientProgressTimeline client={dummyClient} />
    </Layout>
  );
}

export default ClientProgressTimelinePage;
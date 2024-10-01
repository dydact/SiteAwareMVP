import React from 'react';
import { Layout } from '../components/Layout';
import { Analytics as AnalyticsComponent } from '../components/Analytics';
import { User } from '../types';

interface AnalyticsPageProps {
  user: User | null;
}

const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Analytics</h1>
      <AnalyticsComponent />
    </Layout>
  );
}

export default AnalyticsPage;
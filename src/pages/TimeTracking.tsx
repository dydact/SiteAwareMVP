import React from 'react';
import { Layout } from '../components/Layout';
import { TimeTracking as TimeTrackingComponent } from '../components/TimeTracking';
import { User } from '../types';

interface TimeTrackingPageProps {
  user: User | null;
}

const TimeTrackingPage: React.FC<TimeTrackingPageProps> = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Time Tracking</h1>
      <TimeTrackingComponent />
    </Layout>
  );
}

export default TimeTrackingPage;
import React from 'react';
import { Layout } from '../components/Layout';
import { Scheduling as SchedulingComponent } from '../components/Scheduling';
import { User, Schedule } from '../types';

interface SchedulingPageProps {
  user: User | null;
}

const SchedulingPage: React.FC<SchedulingPageProps> = ({ user }) => {
  // This is a placeholder. In a real application, you'd fetch the schedules data from an API.
  const dummySchedules: Schedule[] = [
    { id: '1', startTime: '09:00', endTime: '17:00', days: ['Monday', 'Wednesday', 'Friday'] },
    { id: '2', startTime: '10:00', endTime: '18:00', days: ['Tuesday', 'Thursday'] },
  ];

  return (
    <Layout user={user}>
      <h1>Scheduling</h1>
      <SchedulingComponent schedules={dummySchedules} />
    </Layout>
  );
}

export default SchedulingPage;
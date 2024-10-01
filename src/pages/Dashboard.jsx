import React from 'react';
import Layout from '../components/Layout';
import MedicaidBilling from '../components/MedicaidBilling';

const Dashboard = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <MedicaidBilling />
        {/* Other dashboard components */}
      </div>
    </Layout>
  );
};

export default Dashboard;
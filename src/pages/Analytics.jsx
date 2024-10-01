import React from 'react';
import Layout from '../components/Layout';
import RevenueChart from '../components/RevenueChart';

const Analytics = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Analytics</h1>
        <RevenueChart />
        {/* Add other analytics components here */}
      </div>
    </Layout>
  );
};

export default Analytics;
import React from 'react';
import Layout from '../components/Layout';
import PayrollSummary from '../components/PayrollSummary';

const Payroll = () => {
  const startDate = '2023-05-01';
  const endDate = '2023-05-31';

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Payroll</h1>
        <PayrollSummary startDate={startDate} endDate={endDate} />
      </div>
    </Layout>
  );
};

export default Payroll;
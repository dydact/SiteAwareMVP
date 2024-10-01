import React, { useState, useEffect } from 'react';
import TopBanner from '@/components/TopBanner';
import RevenueChart from '@/components/RevenueChart';
import ClientDistributionChart from '@/components/ClientDistributionChart';
import EmployeePerformanceTable from '@/components/EmployeePerformanceTable';
import { analyticsApi } from '@/services/api';

function Analytics() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      const response = await analyticsApi.getAnalyticsData();
      setAnalyticsData(response.data);
    } catch (err) {
      setError('Failed to fetch analytics data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBanner />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Analytics</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-6">
            <RevenueChart data={analyticsData.revenueData} />
            <ClientDistributionChart data={analyticsData.clientDistribution} />
            <EmployeePerformanceTable data={analyticsData.employeePerformance} />
          </div>
        )}
      </main>
    </div>
  );
}

export default Analytics;
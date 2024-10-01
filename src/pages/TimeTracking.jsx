import React, { useState, useEffect } from 'react';
import TopBanner from '@/components/TopBanner';
import TimeTracker from '@/components/TimeTracker';
import TimeEntryList from '@/components/TimeEntryList';
import { timeTrackingApi } from '@/services/api';
import Layout from '@/components/Layout';

function TimeTracking() {
  const [timeEntries, setTimeEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const fetchTimeEntries = async () => {
    try {
      setLoading(true);
      const response = await timeTrackingApi.getTimeEntries();
      setTimeEntries(response.data);
    } catch (err) {
      setError('Failed to fetch time entries');
    } finally {
      setLoading(false);
    }
  };

  const addTimeEntry = async (entry) => {
    try {
      await timeTrackingApi.addTimeEntry(entry);
      fetchTimeEntries();
    } catch (err) {
      setError('Failed to add time entry');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <TopBanner />
        <main className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Time Tracking</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TimeTracker onAddEntry={addTimeEntry} />
            <TimeEntryList entries={timeEntries} loading={loading} />
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default TimeTracking;
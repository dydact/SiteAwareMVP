import React, { useState, useEffect } from 'react';
import TopBanner from '@/components/TopBanner';
import PayrollSummary from '@/components/PayrollSummary';
import EmployeePayrollList from '@/components/EmployeePayrollList';
import { payrollApi } from '@/services/api';

function Payroll() {
  const [payrollData, setPayrollData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPayrollData();
  }, []);

  const fetchPayrollData = async () => {
    try {
      setLoading(true);
      const response = await payrollApi.getPayrollData();
      setPayrollData(response.data);
    } catch (err) {
      setError('Failed to fetch payroll data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBanner />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Payroll</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-6">
            <PayrollSummary data={payrollData.summary} />
            <EmployeePayrollList employees={payrollData.employees} />
          </div>
        )}
      </main>
    </div>
  );
}

export default Payroll;
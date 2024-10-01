import React, { useState, useEffect } from 'react';
import { formatCurrency, formatDate } from '../utils/formatters';
import { revenueApi, billingApi, schedulingApi } from '../services/api';
import FileUploader from './FileUploader';
import Chart from './Chart';
import DateRangePicker from './DateRangePicker';
import FilterSelector from './FilterSelector';

const RevenueChart = () => {
  const [revenueData, setRevenueData] = useState([]);
  const [billingData, setBillingData] = useState([]);
  const [schedulingData, setSchedulingData] = useState([]);
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [dateRange, filter]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [revenue, billing, scheduling] = await Promise.all([
        revenueApi.getRevenueData(dateRange.start, dateRange.end, filter),
        billingApi.getBillingData(dateRange.start, dateRange.end),
        schedulingApi.getSchedulingData(dateRange.start, dateRange.end),
      ]);
      setRevenueData(revenue);
      setBillingData(billing);
      setSchedulingData(scheduling);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (file) => {
    try {
      const parsedData = await revenueApi.parseRemittanceFile(file);
      setRevenueData((prevData) => [...prevData, ...parsedData]);
    } catch (err) {
      setError('Failed to parse remittance file');
    }
  };

  const calculateExpectedRevenue = () => {
    return billingData.reduce((total, bill) => total + bill.amount, 0);
  };

  const calculateExpectedPayroll = () => {
    return schedulingData.reduce((total, shift) => total + shift.hours * shift.hourlyRate, 0);
  };

  const getRevenueByClient = () => {
    return revenueData.reduce((acc, item) => {
      acc[item.clientName] = (acc[item.clientName] || 0) + item.amount;
      return acc;
    }, {});
  };

  const getRevenueByService = () => {
    return revenueData.reduce((acc, item) => {
      acc[item.serviceName] = (acc[item.serviceName] || 0) + item.amount;
      return acc;
    }, {});
  };

  if (loading) return <div>Loading revenue data...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const expectedRevenue = calculateExpectedRevenue();
  const expectedPayroll = calculateExpectedPayroll();
  const revenueByClient = getRevenueByClient();
  const revenueByService = getRevenueByService();

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Revenue Analysis</h2>
      <DateRangePicker onChange={setDateRange} />
      <FilterSelector onChange={setFilter} />
      <FileUploader onUpload={handleFileUpload} acceptedFileTypes={['.pdf', '.xlsx', '.csv']} />
      <Chart data={revenueData} />
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-bold">Expected Revenue: {formatCurrency(expectedRevenue)}</h3>
          <h3 className="text-xl font-bold">Expected Payroll: {formatCurrency(expectedPayroll)}</h3>
          <h3 className="text-xl font-bold">Expected Profit: {formatCurrency(expectedRevenue - expectedPayroll)}</h3>
        </div>
        <div>
          <h3 className="text-xl font-bold">Revenue by Client</h3>
          <ul>
            {Object.entries(revenueByClient).map(([client, amount]) => (
              <li key={client}>{client}: {formatCurrency(amount)}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Revenue by Service</h3>
        <ul>
          {Object.entries(revenueByService).map(([service, amount]) => (
            <li key={service}>{service}: {formatCurrency(amount)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RevenueChart;
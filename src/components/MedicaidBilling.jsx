import React, { useState, useEffect } from 'react';
import { formatCurrency, formatDate } from '../utils/formatters';
import { medicaidApi, clientApi, serviceApi, documentationApi } from '../services/api';

const MedicaidBilling = () => {
  const [billingData, setBillingData] = useState([]);
  const [clients, setClients] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [clientsData, servicesData, billingData] = await Promise.all([
        clientApi.getClients(),
        serviceApi.getServices(),
        medicaidApi.getBillingData(),
      ]);
      setClients(clientsData);
      setServices(servicesData);
      setBillingData(billingData);
    } catch (err) {
      setError('Failed to fetch billing data');
    } finally {
      setLoading(false);
    }
  };

  const validateDocumentation = async (clientId, serviceId, date) => {
    try {
      const documentation = await documentationApi.getDocumentation(clientId, serviceId, date);
      return documentation.isComplete;
    } catch (err) {
      console.error('Failed to validate documentation:', err);
      return false;
    }
  };

  const handleSubmitBilling = async () => {
    const validatedBilling = await Promise.all(
      billingData.map(async (bill) => {
        const isDocumented = await validateDocumentation(bill.clientId, bill.serviceId, bill.date);
        return { ...bill, isDocumented };
      })
    );

    const billsToSubmit = validatedBilling.filter((bill) => bill.isDocumented);
    
    try {
      await medicaidApi.submitBilling(billsToSubmit);
      alert('Billing submitted successfully');
      fetchData(); // Refresh data after submission
    } catch (err) {
      setError('Failed to submit billing');
    }
  };

  if (loading) return <div>Loading Medicaid/Medicare billing data...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Medicaid/Medicare Billing</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Client</th>
            <th>Service</th>
            <th>Date</th>
            <th>Hours</th>
            <th>Rate</th>
            <th>Total</th>
            <th>Documentation</th>
          </tr>
        </thead>
        <tbody>
          {billingData.map((bill, index) => (
            <tr key={index}>
              <td>{clients.find(c => c.id === bill.clientId)?.name}</td>
              <td>{services.find(s => s.id === bill.serviceId)?.name}</td>
              <td>{formatDate(bill.date)}</td>
              <td>{bill.hours}</td>
              <td>{formatCurrency(bill.rate)}</td>
              <td>{formatCurrency(bill.hours * bill.rate)}</td>
              <td>
                {bill.isDocumented ? (
                  <span className="text-green-500">Documented</span>
                ) : (
                  <span className="text-red-500">Missing</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={handleSubmitBilling}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Billing
        </button>
      </div>
    </div>
  );
};

export default MedicaidBilling;
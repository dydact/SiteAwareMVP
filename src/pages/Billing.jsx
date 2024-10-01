import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import InvoiceList from '../components/InvoiceList';
import InvoiceForm from '../components/InvoiceForm';
import { invoiceApi } from '../services/api';

// Billing page component
function Billing() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch invoices on component mount
  useEffect(() => {
    fetchInvoices();
  }, []);

  // Function to fetch invoices from the API
  const fetchInvoices = async () => {
    try {
      setLoading(true);
      const response = await invoiceApi.getInvoices();
      setInvoices(response.data);
    } catch (err) {
      setError('Failed to fetch invoices');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle creation of a new invoice
  const handleCreateInvoice = async (invoiceData) => {
    try {
      await invoiceApi.createInvoice(invoiceData);
      fetchInvoices(); // Refresh the invoice list
    } catch (err) {
      setError('Failed to create invoice');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <main className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Billing</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InvoiceList invoices={invoices} loading={loading} />
            <InvoiceForm onSubmit={handleCreateInvoice} />
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Billing;
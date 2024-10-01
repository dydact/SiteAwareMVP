import React, { useState, useEffect } from 'react';
import TopBanner from '@/components/TopBanner';
import InvoiceList from '@/components/InvoiceList';
import InvoiceForm from '@/components/InvoiceForm';
import { billingApi } from '@/services/api';

function Billing() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      setLoading(true);
      const response = await billingApi.getInvoices();
      setInvoices(response.data);
    } catch (err) {
      setError('Failed to fetch invoices');
    } finally {
      setLoading(false);
    }
  };

  const createInvoice = async (invoiceData) => {
    try {
      await billingApi.createInvoice(invoiceData);
      fetchInvoices();
    } catch (err) {
      setError('Failed to create invoice');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBanner />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Billing</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InvoiceList invoices={invoices} loading={loading} />
          <InvoiceForm onSubmit={createInvoice} />
        </div>
      </main>
    </div>
  );
}

export default Billing;
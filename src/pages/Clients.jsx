import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ClientList from '../components/ClientList';
import ClientDetails from '../components/ClientDetails';
import { clientApi } from '../services/api';

function Clients() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const response = await clientApi.getClients();
      setClients(response.data);
    } catch (err) {
      setError('Failed to fetch clients');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Clients</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex space-x-6">
        <ClientList 
          clients={clients} 
          onSelectClient={setSelectedClient} 
          loading={loading}
        />
        {selectedClient && <ClientDetails client={selectedClient} />}
      </div>
    </Layout>
  );
}

export default Clients;
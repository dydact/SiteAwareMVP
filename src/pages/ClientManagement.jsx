import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { getClients, createClient } from '../services/api'
import Layout from '@/components/Layout';

function ClientManagement() {
  const [clients, setClients] = useState([])
  const [newClient, setNewClient] = useState({ name: '', classification: '', contactEmail: '' })
  const [error, setError] = useState('')

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      const response = await getClients()
      setClients(response.data)
    } catch (err) {
      setError('Failed to fetch clients')
    }
  }

  const handleInputChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createClient(newClient)
      setNewClient({ name: '', classification: '', contactEmail: '' })
      fetchClients()
    } catch (err) {
      setError('Failed to create client')
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Client Management</h1>
        {error && <p className="error">{error}</p>}
        <h2>Create New Client</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Client Name"
            value={newClient.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="classification"
            placeholder="Client Classification"
            value={newClient.classification}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="contactEmail"
            placeholder="Contact Email"
            value={newClient.contactEmail}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Create Client</button>
        </form>
        <h2>Existing Clients</h2>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              <h3>{client.name}</h3>
              <p>Classification: {client.classification}</p>
              <p>Contact: {client.contactEmail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ClientManagement
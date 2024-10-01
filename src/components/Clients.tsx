import React from 'react';
import { Client } from '../types';

interface ClientsProps {
  clients?: Client[];
}

const Clients: React.FC<ClientsProps> = ({ clients = [] }) => {
  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
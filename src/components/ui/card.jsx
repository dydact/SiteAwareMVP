import React from 'react';

export const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export const EmployeeCard = ({ employee }) => {
  return (
    <Card title={employee.name}>
      <p>Email: {employee.email}</p>
      <p>Clients: {employee.clients.items.length}</p>
    </Card>
  );
};

export const ClientCard = ({ client }) => {
  return (
    <Card title={client.name}>
      <p>Email: {client.email}</p>
      <p>Employee: {client.employee.name}</p>
      <p>Treatment Plans: {client.treatmentPlans.items.length}</p>
    </Card>
  );
};

// Add more specific card components for other models as needed
import React from 'react';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
}

interface PricingManagementProps {
  plans?: PricingPlan[];
}

const PricingManagement: React.FC<PricingManagementProps> = ({ plans = [] }) => {
  return (
    <div>
      <h2>Pricing Management</h2>
      <ul>
        {plans.map(plan => (
          <li key={plan.id}>{plan.name}: ${plan.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingManagement;
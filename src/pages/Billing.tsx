import React from 'react';
import { Layout } from '../components/Layout';
import { Billing as BillingComponent } from '../components/Billing';
import { User } from '../types';

interface BillingPageProps {
  user: User | null;
}

const BillingPage: React.FC<BillingPageProps> = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Billing</h1>
      <BillingComponent />
    </Layout>
  );
}

export default BillingPage;
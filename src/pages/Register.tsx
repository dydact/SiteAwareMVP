import React from 'react';
import { Layout } from '../components/Layout';
import { Register as RegisterComponent } from '../components/Register';
import { User } from '../types';

interface RegisterPageProps {
  user: User | null;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ user }) => {
  const handleRegister = (username: string, email: string, password: string) => {
    // Implement registration logic here
    console.log('Registering:', username, email, password);
  };

  return (
    <Layout user={user}>
      <h1>Register</h1>
      <RegisterComponent onRegister={handleRegister} />
    </Layout>
  );
}

export default RegisterPage;
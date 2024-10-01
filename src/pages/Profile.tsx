import React from 'react';
import { Layout } from '../components/Layout';
import { Profile as ProfileComponent } from '../components/Profile';
import { User } from '../types';

interface ProfilePageProps {
  user: User | null;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Profile</h1>
      {user && <ProfileComponent user={user} />}
    </Layout>
  );
}

export default ProfilePage;
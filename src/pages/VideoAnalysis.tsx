import React from 'react';
import { Layout } from '../components/Layout';
import { VideoAnalysis as VideoAnalysisComponent } from '../components/VideoAnalysis';
import { User } from '../types';

interface VideoAnalysisPageProps {
  user: User | null;
}

const VideoAnalysisPage: React.FC<VideoAnalysisPageProps> = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Video Analysis</h1>
      <VideoAnalysisComponent />
    </Layout>
  );
}

export default VideoAnalysisPage;
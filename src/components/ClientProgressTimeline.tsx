import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Client, ProgressItem } from '../types';

// Props interface for ClientProgressTimeline
interface ClientProgressTimelineProps {
  client: Client;
}

// ClientProgressTimeline component
export const ClientProgressTimeline: React.FC<ClientProgressTimelineProps> = ({ client }) => {
  if (!client) return null;

  // Function to get initials from a name
  const getInitials = (name: string): string => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Function to get status color based on progress item status
  const getStatusColor = (status: ProgressItem['status']): string => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in_progress': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Progress Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Implement the timeline content */}
        {/* This could include mapping over client.progressTimeline and rendering each item */}
      </CardContent>
    </Card>
  );
};
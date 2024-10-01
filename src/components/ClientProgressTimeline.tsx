import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Client, ProgressItem } from '@/types';

interface ClientProgressTimelineProps {
  client: Client;
}

export const ClientProgressTimeline: React.FC<ClientProgressTimelineProps> = ({ client }) => {
  if (!client) return null;

  const getInitials = (name: string): string => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

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
      </CardContent>
    </Card>
  );
};
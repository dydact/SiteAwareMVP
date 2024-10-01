import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const ClientProgressTimeline = ({ client }) => {
  if (!client) return null;

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in_progress': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Progress Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {getInitials(client.name)}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{client.name}</h3>
              <p className="text-sm text-gray-500">Started treatment: {client.treatmentStartDate}</p>
            </div>
          </div>
          <div className="ml-16 space-y-2">
            {client.progressTimeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-3 h-3 ${getStatusColor(item.status)} rounded-full`}></div>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
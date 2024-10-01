import React from 'react';
import { Card as RadixCard } from '@radix-ui/themes';

// Custom Card component
export const Card = ({ children, ...props }) => (
  <RadixCard {...props}>
    {children}
  </RadixCard>
);

// Custom CardContent component
export const CardContent = ({ children, ...props }) => (
  <div className="card-content" {...props}>
    {children}
  </div>
);

// Custom CardHeader component
export const CardHeader = ({ children, ...props }) => (
  <div className="card-header" {...props}>
    {children}
  </div>
);

// Custom CardTitle component
export const CardTitle = ({ children, ...props }) => (
  <h2 className="card-title" {...props}>
    {children}
  </h2>
);
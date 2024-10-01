import React from 'react';

const Table = ({ children, className, ...props }) => (
  <table className={`min-w-full divide-y divide-gray-200 ${className}`} {...props}>
    {children}
  </table>
);

const TableHeader = ({ children, className, ...props }) => (
  <thead className={`bg-gray-50 ${className}`} {...props}>
    {children}
  </thead>
);

const TableBody = ({ children, className, ...props }) => (
  <tbody className={`bg-white divide-y divide-gray-200 ${className}`} {...props}>
    {children}
  </tbody>
);

const TableRow = ({ children, className, ...props }) => (
  <tr className={`${className}`} {...props}>
    {children}
  </tr>
);

const TableHead = ({ children, className, ...props }) => (
  <th
    scope="col"
    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
    {...props}
  >
    {children}
  </th>
);

const TableCell = ({ children, className, ...props }) => (
  <td className={`px-6 py-4 whitespace-nowrap ${className}`} {...props}>
    {children}
  </td>
);

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
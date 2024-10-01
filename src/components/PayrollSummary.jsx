import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { formatCurrency } from '../utils/formatters';
import { payrollApi } from '../services/api';

const PayrollSummary = ({ startDate, endDate }) => {
  const [payrollData, setPayrollData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPayrollData();
  }, [startDate, endDate]);

  const fetchPayrollData = async () => {
    try {
      setLoading(true);
      const response = await payrollApi.getPayrollSummary(startDate, endDate);
      setPayrollData(response.data);
    } catch (err) {
      setError('Failed to fetch payroll data');
    } finally {
      setLoading(false);
    }
  };

  const handleExportToQuickBooks = async () => {
    try {
      await payrollApi.exportToQuickBooks(payrollData);
      alert('Payroll data exported to QuickBooks successfully!');
    } catch (err) {
      alert('Failed to export to QuickBooks. Please try again.');
    }
  };

  if (loading) return <div>Loading payroll summary...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!payrollData) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payroll Summary</CardTitle>
        <Button onClick={handleExportToQuickBooks}>Export to QuickBooks</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Regular Hours</TableHead>
              <TableHead>Overtime Hours</TableHead>
              <TableHead>Gross Pay</TableHead>
              <TableHead>Deductions</TableHead>
              <TableHead>Net Pay</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payrollData.employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.regularHours}</TableCell>
                <TableCell>{employee.overtimeHours}</TableCell>
                <TableCell>{formatCurrency(employee.grossPay)}</TableCell>
                <TableCell>{formatCurrency(employee.deductions)}</TableCell>
                <TableCell>{formatCurrency(employee.netPay)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4">
          <p><strong>Total Gross Pay:</strong> {formatCurrency(payrollData.totalGrossPay)}</p>
          <p><strong>Total Deductions:</strong> {formatCurrency(payrollData.totalDeductions)}</p>
          <p><strong>Total Net Pay:</strong> {formatCurrency(payrollData.totalNetPay)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PayrollSummary;
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ data }) => {
  // Process data for chart
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Revenue',
        data: data.map(item => item.amount),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue Over Time',
      },
    },
  };

  return (
    <div className="mt-4">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
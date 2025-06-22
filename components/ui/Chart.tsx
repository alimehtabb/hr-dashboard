'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DepartmentChart() {
  const data = {
    labels: ['Sales', 'Accounts', 'IT', 'Admin'],
    datasets: [
      {
        label: 'Performance (%)',
        data: [80, 90, 70, 50],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Department Performance' },
    },
  };

  return <Bar data={data} options={options} />;
}

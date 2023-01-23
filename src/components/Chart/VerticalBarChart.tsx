import React from 'react';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { departments } from '../../data/departments';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const VerticalBarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Ankiety prowadzących z podziałem na wydziały (wypełnienia)',
      },
    },
  };

  const labels = departments.map(department => department.abbreviation);

  const data = {
    labels,
    datasets: [
      {
        label: 'Wypełnienia',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(23, 163, 74, 0.5)',
      }
    ],
  };

  return <Bar options={ options } data={ data }/>;
};

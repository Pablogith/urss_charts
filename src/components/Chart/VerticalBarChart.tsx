import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

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

  const labels = [ 'WILiGZ', 'WIMiIP', 'WEAIiIB', 'WIEiT', 'WIMiR', 'WGGiOS', 'WGGiIS', 'WIMiC', 'WO', 'WMN', 'WWNiG', 'WZ', 'WEiP', 'WFiIS', 'WMS', 'WH'];

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

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

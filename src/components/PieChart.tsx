import React from 'react';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

interface Props {
  data: any;
}

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = (props: Props) => {
  console.log(props);
  const {
    departments
  } = props.data;
  const fakeColors = departments.map(() => faker.color.rgb({ includeAlpha: true }));

  const data = {
    labels: departments.map((department: any) => department.name),
    datasets: [
      {
        label: 'Liczba wypełnień',
        data: departments.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: fakeColors,
        borderColor: fakeColors,
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={ data }/>;
};

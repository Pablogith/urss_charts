import React from 'react';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: any;
  currentDate: string;
}

export const VerticalBarChart = (props: Props) => {
  const { data, currentDate } = props;

  const getDepartmentNamesFromCurrentDate = () => {
    const departmentsData = data.departmentsStats[currentDate];
    const currentDateDepartmentsId = Object.keys(departmentsData);
    const currentDateDepartments = [];
    const { allDepartments } = data;

    const departments = data.departments;
    for (let department of departments) {
      if (currentDateDepartmentsId.includes(department.id)) {
        const valueOfCurrentDepartment = departmentsData[department.id];
        const currentDepartmentMax = allDepartments.find((dep: any) => dep.departmentId == department.id);
        const value = (100 * valueOfCurrentDepartment) / currentDepartmentMax.value;

        currentDateDepartments.push({
          ...department,
          value: value,
          fillCount: valueOfCurrentDepartment,
          max: currentDepartmentMax.value
        });
      }
    }

    return currentDateDepartments;
  };

  const departmentNames = getDepartmentNamesFromCurrentDate().map(data => {
    const { name } = data;
    const formattedName = name
      .split(' ')
      .map((word: string) => word.charAt(0))
      .join('');

    return {
      name,
      formattedName
    }
  });

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        max: 100
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Ankiety prowadzących z podziałem na wydziały (wypełnienia)',
      },
      tooltip: {
        callbacks: {
          title: function (context: any) {
            const label = context.at(0).label;
            const labelIndex = departmentNames.findIndex(name => name.formattedName === label);

            return departmentNames[labelIndex].name;
          },
          label: function(context: any) {
            return `${context.formattedValue}%`;
          }
        }
      }
    },
  };

  const chartData = {
    labels: departmentNames.map(name => name.formattedName),
    datasets: [
      {
        label: 'Wypełnienia',
        data: getDepartmentNamesFromCurrentDate().map(data => parseFloat(data.value).toFixed(2)),
        backgroundColor: 'rgba(23, 163, 74, 0.5)'
      }
    ]
  };

  return <Bar options={ chartOptions } data={ chartData }/>;
};

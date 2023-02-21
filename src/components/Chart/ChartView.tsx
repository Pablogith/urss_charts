import React, { useState, useContext } from 'react';
import { ChartHeader } from './ChartHeader';
import { VerticalBarChart } from './VerticalBarChart';
import { SimpleStats } from '../SimpleStats';

interface Props {
  data: any;
}

export const ChartView = (props: Props = { data: {} }) => {
  const { data } = props;
  const [currentState, setCurrentState] = useState({
    currentDate: Object.keys(data.departmentsStats).at(-1) as string,
  });

  const currentDateDate = data.departmentsStats[currentState.currentDate];
  const currentDateDateValues = Object.values(currentDateDate) as number[];

  const allFillings = currentDateDateValues.reduce(
    (acc: number, value: number) => (acc += value),
    0,
  );
  const allDepartmentsCount = data.allDepartments.reduce((acc: number, department: any) => {
    return (acc += department.value);
  }, 0);
  let allFillingsInPercentage: any = (100 * allFillings) / allDepartmentsCount;
  allFillingsInPercentage = parseFloat(allFillingsInPercentage).toFixed(2);

  let averageNumberOfFills: any = Math.round(allFillings / currentDateDateValues.length);

  const maximumNumberOfFills = Math.max(...currentDateDateValues);
  const maximumNumberOfFillsItemId =
    Object.keys(currentDateDate)[
      Object.values(currentDateDate).findIndex((el) => el == maximumNumberOfFills)
    ];
  let maximumNumberOfFillsInPercentage: any =
    (100 * maximumNumberOfFills) /
    data.allDepartments.find(
      (department: any) => department.departmentId == maximumNumberOfFillsItemId,
    ).value;
  maximumNumberOfFillsInPercentage = parseFloat(maximumNumberOfFillsInPercentage).toFixed(2);

  const getDepartmentNamesFromCurrentDate = () => {
    const departmentsData = data.departmentsStats[currentState.currentDate];
    const currentDateDepartmentsId = Object.keys(departmentsData);
    const currentDateDepartments = [];
    const { allDepartments } = data;

    const departments = data.departments;
    for (const department of departments) {
      if (currentDateDepartmentsId.includes(department.id)) {
        const valueOfCurrentDepartment = departmentsData[department.id];
        const currentDepartmentMax = allDepartments.find(
          (dep: any) => dep.departmentId == department.id,
        );
        const value = (100 * valueOfCurrentDepartment) / currentDepartmentMax.value;

        currentDateDepartments.push({
          ...department,
          value: value,
          fillCount: valueOfCurrentDepartment,
          max: currentDepartmentMax.value,
        });
      }
    }

    return currentDateDepartments;
  };

  maximumNumberOfFillsInPercentage = Math.max(
    ...getDepartmentNamesFromCurrentDate().map((item: any) => item.value),
  );
  maximumNumberOfFillsInPercentage = parseFloat(maximumNumberOfFillsInPercentage).toFixed(2);

  const sumOfFilling: any = getDepartmentNamesFromCurrentDate()
    .map((item: any) => item.value)
    .reduce((acc: number, val) => (acc += val), 0);
  averageNumberOfFills = parseFloat(
    (sumOfFilling / getDepartmentNamesFromCurrentDate().length).toString(),
  ).toFixed(2);

  const fillCount = getDepartmentNamesFromCurrentDate().reduce((acc: number, item) => {
    return (acc += item.fillCount);
  }, 0);
  const all = getDepartmentNamesFromCurrentDate().reduce((acc: number, item) => {
    return (acc += item.max);
  }, 0);

  let departmentNameWithMaxFills = null;
  const max = Math.max(...getDepartmentNamesFromCurrentDate().map((item) => item.value));
  const departmentNameWithMaxFill = getDepartmentNamesFromCurrentDate().find((item) => {
    return item.value == max;
  }).name;
  departmentNameWithMaxFills = departmentNameWithMaxFill;

  const handleChangeCurrentDate = (date: string) => {
    setCurrentState({
      currentDate: date,
    });
  };

  return (
    <>
      <SimpleStats
        allFillings={allFillingsInPercentage}
        averageNumberOfFills={averageNumberOfFills}
        maximumNumberOfFills={maximumNumberOfFillsInPercentage}
        departmentNameWithMaxFills={departmentNameWithMaxFills}
      />
      <ChartHeader
        data={props.data}
        currentDate={currentState.currentDate}
        onChangeCurrentDate={handleChangeCurrentDate}
      />
      <VerticalBarChart data={props.data} currentDate={currentState.currentDate} />
    </>
  );
};

import React, { useState } from 'react';
import { ChartHeader } from './ChartHeader';
import { VerticalBarChart } from './VerticalBarChart';
import { StatsWrapper } from '../StatsWrapper';
import { DepartmentsData, DepartmentValue } from '../../../models/DepartmentsData';

interface Props {
  data: DepartmentsData | object;
}

type DepartmentData = {
  name: string;
  value: number;
  fillCount: number;
  max: number;
};

export const ChartView = (props: Props) => {
  const data = props.data as DepartmentsData;
  const [currentState, setCurrentState] = useState({
    currentDate: Object.keys(data.departmentsStats).at(-1) as string
  });

  const handleChangeCurrentDate = (date: string) => {
    setCurrentState({
      currentDate: date
    });
  };

  const currentDateDate = data.departmentsStats[currentState.currentDate];
  const currentDateDateValues = Object.values(currentDateDate) as number[];

  const getDepartmentNamesFromCurrentDate = (): DepartmentData[] => {
    const departmentsData = data.departmentsStats[currentState.currentDate];
    const currentDateDepartmentsId = Object.keys(departmentsData);
    const currentDateDepartments = [];
    const { allDepartments } = data;

    const departments = data.departments;
    for (const department of departments) {
      if (currentDateDepartmentsId.includes(department.id)) {
        const valueOfCurrentDepartment: string | number = departmentsData[department.id];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const currentDepartmentMax: number = allDepartments.find(
          (dep: DepartmentValue) => dep.departmentId == department.id
        ).value;
        const value = (100 * (valueOfCurrentDepartment as number)) / currentDepartmentMax;

        currentDateDepartments.push({
          name: department.name,
          value: value,
          fillCount: valueOfCurrentDepartment,
          max: currentDepartmentMax
        } as DepartmentData);
      }
    }

    return currentDateDepartments as DepartmentData[];
  };

  const maxNumberOfFillsInPercentage: number = (() => {
    const itemWithBiggestValue = Math.max(
      ...getDepartmentNamesFromCurrentDate().map((item: DepartmentData) => item.value)
    ).toString();

    return Number(parseFloat(itemWithBiggestValue).toFixed(2));
  })();

  const averageNumberOfFillsInPercentage: number = (() => {
    const sumOfFilling: number = getDepartmentNamesFromCurrentDate()
      .map((item: DepartmentData) => item.value)
      .reduce((acc: number, val) => (acc += val), 0);

    const asPercentageString = parseFloat(
      (sumOfFilling / getDepartmentNamesFromCurrentDate().length).toString()
    ).toFixed(2);

    return Number(asPercentageString);
  })();

  const allFillingsInPercentage: number = (() => {
    const allDepartmentsCount = data.allDepartments.reduce((acc: number, department: any) => {
      return (acc += department.value);
    }, 0);

    const allFillings = currentDateDateValues.reduce(
      (acc: number, value: number) => (acc += value),
      0
    );

    const fillingsInPercentageString = parseFloat(
      ((100 * allFillings) / allDepartmentsCount).toString()
    ).toFixed(2);

    return Number(fillingsInPercentageString);
  })();

  const departmentNameWithMaxFills = getDepartmentNamesFromCurrentDate().find((item: DepartmentData) => {
    const max = Math.max(...getDepartmentNamesFromCurrentDate().map((item: DepartmentData) => item.value));
    return item.value == max;
  })?.name || '';

  return (
    <>
      <StatsWrapper
        allFillings={allFillingsInPercentage}
        averageNumberOfFills={averageNumberOfFillsInPercentage}
        maximumNumberOfFills={maxNumberOfFillsInPercentage}
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

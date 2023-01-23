import React from 'react';
import { ChartHeader } from './ChartHeader';
import { VerticalBarChart } from './VerticalBarChart';
import { SimpleStats } from '../simple-stats';

export const ChartView = () => {
  return (
    <>
      <SimpleStats />
      <ChartHeader/>
      <VerticalBarChart/>
    </>
  );
};

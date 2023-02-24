import React from 'react';
import { StatsBox } from './StatsBox';

interface Props {
  allFillings: number;
  averageNumberOfFills: number;
  maximumNumberOfFills: number;
  departmentNameWithMaxFills: string;
}

export const StatsWrapper = (props: Props) => {
  const {
    allFillings,
    averageNumberOfFills,
    maximumNumberOfFills,
    departmentNameWithMaxFills
  } = props;

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <StatsBox title="Średnia wypełnień dla wszystkich jednostek AGH" content={`${allFillings}%`} />
        <StatsBox title="Średnia wypełnień dla Wydziałów" content={`${averageNumberOfFills}%`} />
      </dl>
      <StatsBox title="Maks. liczba wypełnień" content={`${maximumNumberOfFills}%`}
                additionalContent={departmentNameWithMaxFills} />
    </div>
  );
};

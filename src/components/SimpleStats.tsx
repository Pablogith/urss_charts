import React from 'react';

interface Props {
  allFillings: number;
  averageNumberOfFills: number;
  maximumNumberOfFills: number;
  departmentNameWithMaxFills: string;
}

export const SimpleStats = (props: Props) => {
  const {
    allFillings,
    averageNumberOfFills,
    maximumNumberOfFills,
    departmentNameWithMaxFills
  } = props;

  return (
    <div>
      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <div className='overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6'>
          <dt className='truncate text-sm font-medium text-gray-500'>
            Średnia wypełnień dla wszystkich jednostek AGH
          </dt>
          <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900 transition-all'>
            {allFillings}%
          </dd>
        </div>

        <div className='overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6'>
          <dt className='truncate text-sm font-medium text-gray-500'>
            Średnia wypełnień dla Wydziałów
          </dt>
          <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900 transition-all'>
            {averageNumberOfFills}%
          </dd>
        </div>
      </dl>
      <div className='overflow-auto rounded-lg bg-white px-4 py-5 mt-4 shadow sm:p-6'>
        <dt className='truncate text-sm font-medium text-gray-500'>Maks. liczba wypełnień</dt>
        <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900 transition-all'>
          {maximumNumberOfFills}%
        </dd>
        <dd className='text-sm font-medium text-green-500 transition-all'>
          {departmentNameWithMaxFills}
        </dd>
      </div>
    </div>
  );
};

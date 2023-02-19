import React from 'react';

interface Props {
  allFillings: number;
  averageNumberOfFills: number;
  maximumNumberOfFills: number;
}

export const SimpleStats = (props: Props) => {
  const {
    allFillings,
    averageNumberOfFills,
    maximumNumberOfFills } = props;

  return (
    <>
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Wszystkie wypełnienia</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              { allFillings }
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Średnia liczba wypełnień</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              { averageNumberOfFills }
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">Maks. liczba wypełnień</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              { maximumNumberOfFills }
            </dd>
          </div>
        </dl>
      </div>

    </>
  );
};

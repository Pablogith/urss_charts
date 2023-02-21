import React from 'react';

interface Props {
  columns?: string[];
  data?: { key: string; value: string };
}

export const Table = (props: Props) => {
  return (
    <>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0'>
          <table className='min-w-full divide-y divide-gray-300'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='py-3.5 pr-3 text-left text-sm font-semibold text-gray-900'
                >
                  <p className='group inline-flex'>
                    Data
                    <span className='ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300'>
                      <svg
                        className='h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </p>
                </th>
                <th
                  scope='col'
                  className='py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900'
                >
                  <p className='group inline-flex'>
                    Wartość1
                    <span className='ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300'>
                      <svg
                        className='h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </p>
                </th>
                <th
                  scope='col'
                  className='py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900'
                >
                  <p className='group inline-flex'>
                    Wartość2
                    <span className='ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300'>
                      <svg
                        className='h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </p>
                </th>
                <th
                  scope='col'
                  className='py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900'
                >
                  <p className='group inline-flex'>
                    Wartość3
                    <span className='ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300'>
                      <svg
                        className='h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-gray-200'>
                <td className='py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0'>
                  <div className='font-medium text-gray-900'>12-12-2021</div>
                </td>
                <td className='hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell'>
                  12.0
                </td>
                <td className='hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell'>
                  75.00
                </td>
                <td className='hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell'>
                  175.00
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope='row'
                  colSpan={1}
                  className='hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0'
                >
                  Wszystko
                </th>
                <td className='pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0'>
                  4,485.00
                </td>
                <td className='pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0'>
                  4,485.00
                </td>
                <td className='pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0'>
                  4,485.00
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

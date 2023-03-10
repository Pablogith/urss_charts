import React from 'react';

export const TableWithStickyHeader = () => {
  return (
    <>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='mt-8 flex flex-col'>
          <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle'>
              <div className='shadow-sm ring-1 ring-black ring-opacity-5'>
                <table className='min-w-full border-separate' style={{ borderSpacing: 0 }}>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8'
                      >
                        Name
                      </th>
                      <th
                        scope='col'
                        className='sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'
                      >
                        Title
                      </th>
                      <th
                        scope='col'
                        className='sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell'
                      >
                        Email
                      </th>
                      <th
                        scope='col'
                        className='sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter'
                      >
                        Role
                      </th>
                      <th
                        scope='col'
                        className='sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8'
                      >
                        <span className='sr-only'>Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    <tr>
                      <td className='whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'>
                        Lindsay Walton
                      </td>
                      <td className='whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'>
                        Front-end Developer
                      </td>
                      <td className='whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'>
                        lindsay.walton@example.com
                      </td>
                      <td className='whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500'>
                        Member
                      </td>
                      <td className='relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'>
                        <a href='src/components#' className='text-indigo-600 hover:text-indigo-900'>
                          Edit<span className='sr-only'>, Lindsay Walton</span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import React from 'react';

export const Table = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
            <tr>
              <th scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">
                Data
              </th>
              <th scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                Wartość1
              </th>
              <th scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                Wartość2
              </th>
              <th scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                Wartość3
              </th>
            </tr>
            </thead>
            <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                <div className="font-medium text-gray-900">12-12-2021</div>
              </td>
              <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">12.0</td>
              <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">75.00</td>
              <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">175.00</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <th scope="row" colSpan={ 1 }
                  className="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0">
                Wszystko
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
                4,485.00
              </td>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
                4,485.00
              </td>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
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

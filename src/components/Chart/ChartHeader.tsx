import React, { useState } from 'react';

interface Props {
  data: any;
  currentDate: string;
  onChangeCurrentDate: (date: string) => void;
}

export const ChartHeader = (props: Props) => {
  const { data } = props;
  const departmentsStatsDates = Object.keys(data.departmentsStats);

  const [viewSelectorIsOpen, setViewSelectorIsOpen] = useState(false);

  const handleViewSelector = () => {
    setViewSelectorIsOpen(!viewSelectorIsOpen);
  };

  const handleClickSelectorElement = (value: string) => {
    props.onChangeCurrentDate(value);
    setViewSelectorIsOpen(false);
  };

  return (
    <header className='flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none'>
      <h1 className='text-lg font-semibold text-gray-900'>
        <time dateTime='2022-01'>{props.currentDate}</time>
      </h1>
      <div className='flex items-center'>
        <div className='hidden md:ml-4 md:flex md:items-center'>
          <div className='relative'>
            <button
              onClick={handleViewSelector}
              type='button'
              className='flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50'
              id='menu-button'
              aria-expanded='false'
              aria-haspopup='true'
            >
              Data
              <svg
                className='ml-2 h-5 w-5 text-gray-400'
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
            </button>
            {viewSelectorIsOpen && (
              <div
                onMouseLeave={() => setViewSelectorIsOpen(false)}
                className='absolute right-0 z-10 mt-3 w-36 max-h-48 h-auto origin-top-right overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='menu-button'
              >
                <div className='py-1 transition' role='none'>
                  {departmentsStatsDates.reverse().map((date) => {
                    return (
                      <button
                        key={date}
                        onClick={() => handleClickSelectorElement(date)}
                        className={
                          date == props.currentDate
                            ? 'text-green-500 block px-4 py-2 text-sm'
                            : 'text-gray-700 block px-4 py-2 text-sm'
                        }
                      >
                        {date}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='relative ml-6 md:hidden'>
          <button
            onClick={handleViewSelector}
            type='button'
            className='-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500'
            id='menu-0-button'
            aria-expanded='false'
            aria-haspopup='true'
          >
            <span className='sr-only'>Open menu</span>
            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z' />
            </svg>
          </button>
          {viewSelectorIsOpen && (
            <div
              className='absolute right-0 z-10 mt-3 w-36 max-h-48 h-auto origin-top-right divide-y divide-gray-100 overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-0-button'
            >
              <div className='py-1' role='none'>
                <a
                  href='src/components#'
                  className='text-gray-700 block px-4 py-2 text-sm'
                  role='menuitem'
                  id='menu-0-item-1'
                >
                  Dzisiaj
                </a>
              </div>
              <div className='py-1' role='none'>
                {departmentsStatsDates.map((date) => {
                  return (
                    <button
                      key={date}
                      onClick={() => handleClickSelectorElement(date)}
                      className='text-gray-700 block px-4 py-2 text-sm'
                    >
                      {date}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

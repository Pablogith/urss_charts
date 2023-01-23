import React, { useState } from 'react';
import Moment from 'moment';

export const ChartHeader = () => {
  const [ viewSelectorIsOpen, setViewSelectorIsOpen ] = useState(false);
  const currentDate = Moment().format('MMM Do YYYY');

  const handleViewSelector = () => {
    setViewSelectorIsOpen(!viewSelectorIsOpen);
  };

  return (
    <header className="flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
      <h1 className="text-lg font-semibold text-gray-900">
        <time dateTime="2022-01">{ currentDate }</time>
      </h1>
      <div className="flex items-center">
        <div className="flex items-center rounded-md shadow-sm md:items-stretch">
          <button type="button"
                  className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
            <span className="sr-only">Poprzedni miesiąc</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
          <button type="button"
                  className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block">
            Dzisiaj
          </button>
          <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
          <button type="button"
                  className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
            <span className="sr-only">Następny miesiąc</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
        <div className="hidden md:ml-4 md:flex md:items-center">
          <div className="relative">
            <button onClick={handleViewSelector}
                    type="button"
                    className="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                    id="menu-button" aria-expanded="false" aria-haspopup="true">
              Miesiąc
              <svg className="ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                   fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"/>
              </svg>
            </button>


            {/*Dropdown menu, show/hide based on menu state.*/ }

            {/*Entering: "transition ease-out duration-100"*/ }
            {/*  From: "transform opacity-0 scale-95"*/ }
            {/*  To: "transform opacity-100 scale-100"*/ }
            {/*Leaving: "transition ease-in duration-75"*/ }
            {/*  From: "transform opacity-100 scale-100"*/ }
            {/*  To: "transform opacity-0 scale-95"*/ }

            {
              viewSelectorIsOpen && (
                <div
                  className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                  <div className="py-1" role="none">
                    {/*Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */ }
                    <a href="src/components#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                       id="menu-item-0">Dzień</a>
                    <a href="src/components#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                       id="menu-item-1">Tydzień</a>
                    <a href="src/components#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                       id="menu-item-2">Miesiąc</a>
                    <a href="src/components#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                       id="menu-item-3">Rok</a>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="relative ml-6 md:hidden">
          <button onClick={handleViewSelector}
                  type="button"
                  className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
                  id="menu-0-button" aria-expanded="false" aria-haspopup="true">
            <span className="sr-only">Open menu</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path
                d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
            </svg>
          </button>


          {/*Dropdown menu, show/hide based on menu state.*/ }

          {/*Entering: "transition ease-out duration-100"*/ }
          {/*  From: "transform opacity-0 scale-95"*/ }
          {/*  To: "transform opacity-100 scale-100"*/ }
          {/*Leaving: "transition ease-in duration-75"*/ }
          {/*  From: "transform opacity-100 scale-100"*/ }
          {/*  To: "transform opacity-0 scale-95"*/ }

          {
            viewSelectorIsOpen && (
              <div
                className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button">
                <div className="py-1" role="none">
                  <a href="src/components#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                     id="menu-0-item-1">Dzisiaj</a>
                </div>
                <div className="py-1" role="none">
                  <a href="src/components#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                     id="menu-0-item-2">Dzień</a>
                  <a href="src/components#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                     id="menu-0-item-3">Tydzień</a>
                  <a href="src/components#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                     id="menu-0-item-4">Miesiąc</a>
                  <a href="src/components#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                     id="menu-0-item-5">Roko</a>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </header>
  );
};

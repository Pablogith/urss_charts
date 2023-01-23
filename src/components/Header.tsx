import React from 'react';

export const Header = () => {
  return (
    <header className="bg-green-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">URSS</span>
              <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Dashboard</a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Dashboard</a>
        </div>
      </nav>
    </header>
  );
};

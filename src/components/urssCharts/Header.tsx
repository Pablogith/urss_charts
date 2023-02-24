import React from 'react';
import { ContentWrapper } from './ContentWrapper';

export const Header = () => {
  return (
    <header className='bg-green-600'>
      <ContentWrapper>
        <nav className='mx-auto max-w-7xl' aria-label='Top'>
          <div className='flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none'>
            <div className='flex items-center'>
              <a href='src/components#'>
                <span className='sr-only'>URSS</span>
                <img
                  className='h-10 w-auto'
                  src={process.env.PUBLIC_URL + '/LogoURSS/PNG/LogoURSS__skrocone2_white.png'}
                  alt='Skrócone Logo URSS AGH'
                />
              </a>
            </div>
          </div>
        </nav>
      </ContentWrapper>
    </header>
  );
};

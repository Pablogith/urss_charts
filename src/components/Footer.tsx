import React from 'react';
import { Divider } from './Divider';
import { ContentWrapper } from './ContentWrapper';

export const Footer = () => {
  return (
    <>
      <Divider/>
      <footer className="bg-white">
        <ContentWrapper>
          <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="w-full flex flex-row justify-center items-center gap-x-10 md:justify-start">
                <img className="h-20 w-auto"
                     src={ process.env.PUBLIC_URL + '/agh_znk_wbr_rgb_150ppi.jpg' }
                     alt="Logo AGH"/>
                <img className="h-10 w-auto"
                     src={ process.env.PUBLIC_URL + '/LogoURSS/PNG/LogoURSS__skrocone2_green.png' }
                     alt="Logo URSS"/>
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl py-4 md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <p
                className="flex flex-row items-baseline text-black text-xs opacity-40 hover:cursor-pointer hover:opacity-100 transition">
                <p>Powered by</p>
                <img className="h-6 w-auto ml-2"
                     src={ process.env.PUBLIC_URL + '/SAK_LOGO_FULL.svg' }
                     alt="SAK AGH Logo"/>
              </p>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-base text-gray-400">
                &copy; 2023 Akademia Górniczo Hutnicza im. Stanisława Staszica w Krakowie
              </p>
            </div>
          </div>
        </ContentWrapper>
      </footer>
    </>
  );
};

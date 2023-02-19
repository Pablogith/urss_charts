import React from 'react';

export const LoadingCircle = () => {
  return (
    <>
      <div className='w-full flex flex-col align-center items-center mt-10 gap-10'>
        <div className='lds-roller'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>Loading...</h1>
      </div>
    </>
  );
};

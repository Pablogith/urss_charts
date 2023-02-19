import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ContentWrapper = (props: Props) => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mx-auto max-w-3xl">
        { props.children }
      </div>
    </div>

  );
};

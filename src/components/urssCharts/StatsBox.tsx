import React from 'react';

interface Props {
  title: string;
  content: string;
  additionalContent?: any;
}

export const StatsBox = (props: Props) => {
  const { title, content } = props;

  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt className="truncate text-sm font-medium text-gray-500">
        {title}
      </dt>
      <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 transition-all">
        {content}
      </dd>
      {
        props.additionalContent && (
          <dd className="text-sm font-medium text-green-500 transition-all">
            {props.additionalContent}
          </dd>
        )
      }
    </div>
  );
};

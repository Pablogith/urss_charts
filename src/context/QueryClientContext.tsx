import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
  children: React.ReactNode;
}

export const QueryClientContext = (props: Props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={ queryClient }>
      { props.children }
    </QueryClientProvider>
  );
};

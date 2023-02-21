import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { UrssCharts } from './pages/UrssCharts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/urss-charts',
    element: <UrssCharts />,
    errorElement: <h1>Mamy pewien problem...</h1>,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

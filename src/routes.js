import React from 'react';
import { useRoutes } from 'react-router-dom';
const LandingPage = React.lazy(() => import('pages'));

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <React.Suspense>
          <LandingPage />
        </React.Suspense>
      ),
    },
  ]);
};

export default Router;

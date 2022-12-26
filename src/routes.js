import React from 'react';
import { useRoutes } from 'react-router-dom';
const LandingPage = React.lazy(() => import('pages/LandingPage'));
const ProcessPage = React.lazy(() => import('pages/Process'));

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
        {
            path: '/process',
            element: (
                <React.Suspense>
                    <ProcessPage />
                </React.Suspense>
            ),
        },
    ]);
};

export default Router;

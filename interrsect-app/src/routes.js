import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import LandingLayout from './layouts/landing';
//
import Page404 from './pages/Page404';
import TestPage from './pages/TestPage';
import AboutPage from './pages/AboutPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/test" />, index: true },
        { path: 'test', element: <TestPage /> },
        {path: 'about', element: <AboutPage />}
      ],
    },
    {
      element: <LandingLayout />,
      children: [
        { element: <Navigate to="/" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

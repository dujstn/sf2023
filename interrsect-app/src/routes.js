import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import Page404 from './pages/Page404';
import DemoPage from './pages/DemoPage';
import AboutPage from './pages/AboutPage';
import ChemPage from './pages/ChemPage';

// Subsections
import FebTen from './sections/chem/FebTen';
import FebFourteen from './sections/chem/FebFourteen';
import FebFifteen from './sections/chem/FebFifteen';
import FebTwoOne from './sections/chem/FebTwoOne';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/demo" />, index: true },
        { path: 'demo', element: <DemoPage /> },
        { path: 'about', element: <AboutPage /> },
        {
          path: 'chemtwelve',
          element: <ChemPage />,
          children: [
            { path: 'feb-10', element: <FebTen /> },
            { path: 'feb-14', element: <FebFourteen /> },
            { path: 'feb-15', element: <FebFifteen /> },
            { path: 'feb-21', element: <FebTwoOne /> },
          ],
        },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
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

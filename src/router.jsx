import {
  ACTIVITIES_PATH,
  DASHBOARD_PATH,
  INVOICES_PATH,
  PROJECTS_PATH,
  ROOT_PATH,
  SIGNIN_PATH,
  TASKS_PATH,
} from 'constants/app-paths';
import { createBrowserRouter } from 'react-router';
import Layout from 'components/Layout';
import ProtectedRoute from 'components/ProtectedRoute';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import Projects from 'pages/Projects';
import Tasks from 'pages/Tasks';
import Invoices from 'pages/Invoices';
import Activities from 'pages/Activities';

const router = createBrowserRouter([
  {
    path: SIGNIN_PATH,
    element: <Login />,
  },
  {
    path: ROOT_PATH,
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: DASHBOARD_PATH,
        element: <Dashboard />,
      },
      {
        path: PROJECTS_PATH,
        element: <Projects />,
      },
      {
        path: TASKS_PATH,
        element: <Tasks />,
      },
      {
        path: INVOICES_PATH,
        element: <Invoices />,
      },
      {
        path: ACTIVITIES_PATH,
        element: <Activities />,
      },
    ],
  },
]);

export default router;

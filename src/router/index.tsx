import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from '../global';
import { HomePage } from '../views/pages';
import { HomeLayout } from '../views/layouts';

export const router = createBrowserRouter([
  {
    path: PATHS.ROOT,
    element: <HomeLayout />,
    children: [
      {
        path: PATHS.ROOT,
        element: <HomePage />,
      }
    ]
  },
]);
import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from '../global';
import { HomePage, PokemonDetailsPage, PokemonPage } from '../views/pages';
import { AppLayout, HomeLayout } from '../views/layouts';

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
  {
    path: PATHS.ROOT,
    element: <AppLayout />,
    children: [
      {
        path: PATHS.POKEMON,
        element: <PokemonPage />,
      },
      {
        path: `${PATHS.POKEMON}/:id`,
        element: <PokemonDetailsPage />,
      },
    ]
  },
]);
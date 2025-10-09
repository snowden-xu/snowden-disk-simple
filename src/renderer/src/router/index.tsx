import { createHashRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const router = createHashRouter(routes);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

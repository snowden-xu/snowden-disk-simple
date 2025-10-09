import { Navigate } from 'react-router-dom';
import Login from '../pages/login';

export const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
];

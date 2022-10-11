import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const WorksPage = lazy(() => import('pages/Works/WorksPage'));

export const routes = [
  { id: 1, path: '/', element: <HomePage /> },
  { id: 2, path: '/works', element: <WorksPage /> },
  { id: 3, path: '*', element: <Navigate to="/" /> },
];

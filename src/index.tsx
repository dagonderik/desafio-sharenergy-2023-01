import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/main/Main';
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: 'dashboard',
    element: <Main />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

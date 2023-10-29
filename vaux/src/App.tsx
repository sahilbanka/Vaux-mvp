import { useRoutes } from 'react-router';
import { useState } from 'react';
import './App.css';
import Dashboard from 'components/Dashboard';
import Login from 'components/Login';
import { ProtectedRoute } from 'components/ProtectedRoute';
import SignUp from 'components/SignUp';
import Studio from 'components/Studio';
import { GuestRoute } from 'components/GuestRoute';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <GuestRoute><Dashboard /></GuestRoute>
      },
    {
      path: "/login",
      element: <GuestRoute><Login /></GuestRoute>
    },
    {
      path: "/signup",
      element: <GuestRoute><SignUp /></GuestRoute>
    },
    {
      path: '/studio',
      element: <ProtectedRoute><Studio /></ProtectedRoute>
    }
  ]);
  return routes;
}

export default App;
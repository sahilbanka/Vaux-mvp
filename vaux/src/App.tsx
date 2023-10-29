import { useRoutes } from 'react-router';
import { useState } from 'react';
import './App.css';
import Dashboard from 'components/Dashboard';
import Login from 'components/Login';
import { ProtectedRoute } from 'components/ProtectedRoute';
import SignUp from 'components/SignUp';
import Explore from 'components/Explore';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: 
        <Dashboard />
      },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: '/explore',
      element: <Explore />
    }
  ]);
  return routes;
}

export default App;
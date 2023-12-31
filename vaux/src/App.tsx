import { useRoutes, Outlet } from 'react-router';
import Dashboard from 'components/guest/Dashboard';
import Login from 'components/guest/Login';
import { ProtectedRoute } from 'components/routeGuard/ProtectedRoute';
import SignUp from 'components/guest/SignUp';
import Studio from 'components/studio/Studio';
import ProjectList from 'components/studio/ProjectsList';
import Project from 'components/studio/Project';
import { GuestRoute } from 'components/routeGuard/GuestRoute';
import './App.css';

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
      element: <ProtectedRoute><Studio content={<Outlet />} /></ProtectedRoute>,
      children: [
        {
          path: '',
          element: <ProtectedRoute><ProjectList /></ProtectedRoute>
        },
        {
          path: 'projects',
          element: <ProtectedRoute><ProjectList /></ProtectedRoute>
        },
        {
          path: 'projects/:id',
          element: <ProtectedRoute><Project /></ProtectedRoute>
        },
      ]
    }, 
  ]);
  return routes;
}

export default App;
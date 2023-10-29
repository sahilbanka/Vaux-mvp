import { useRoutes } from 'react-router';
import Dashboard from 'components/guest/Dashboard';
import Login from 'components/guest/Login';
import { ProtectedRoute } from 'components/routeGuard/ProtectedRoute';
import SignUp from 'components/guest/SignUp';
import Studio from 'components/Studio';
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
      element: <ProtectedRoute><Studio /></ProtectedRoute>
    }
  ]);
  return routes;
}

export default App;
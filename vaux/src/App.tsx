import { useRoutes } from 'react-router';
import './App.css';
import Dashboard from 'components/Dashboard';
import Login from 'components/Login';
import { ProtectedRoute } from 'components/ProtectedRoute';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);
  return routes;
}

export default App;
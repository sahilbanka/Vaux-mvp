import { useRoutes } from 'react-router';
import './App.css';
import Dashboard from 'components/Dashboard';
import Login from 'components/Login';
import { ProtectedRoute } from 'components/ProtectedRoute';
import SignUp from 'components/SignUp';

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
    }
  ]);
  return routes;
}

export default App;
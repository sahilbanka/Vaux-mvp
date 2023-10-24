import { useRoutes } from 'react-router';
import './App.css';
import MainHeader from 'components/MainHeader';
import Login from 'components/Login';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainHeader />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);
  return routes;
}

export default App;
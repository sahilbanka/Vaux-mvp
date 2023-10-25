import { useRoutes } from 'react-router';
import './App.css';
import MainHeader from 'components/MainHeader';
import Login from 'components/Login';
import AIVoicesListHome from 'components/Home/AIVoicesListHome';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainHeader />
    },
    {
      path: "/voices",
      element: <AIVoicesListHome />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);
  return routes;
}

export default App;
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../pages/home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Apartments from '../pages/Apartments/Apartments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/apartment',
        element: <Apartments></Apartments>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;

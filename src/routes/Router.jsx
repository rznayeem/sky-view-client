import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../pages/home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Apartments from '../pages/Apartments/Apartments';
import Dashboard from '../Layouts/Dashboard';
import Profile from '../pages/Dashboard/Profile/Profile';
import AdminProfile from '../pages/Dashboard/AdminProfile/AdminProfile';
import PrivateRoute from './PrivateRoute';

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
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // user routes
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      // admin routes
      {
        path: 'adminProfile',
        element: <AdminProfile></AdminProfile>,
      },
    ],
  },
]);

export default router;

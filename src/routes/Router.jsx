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
import Agreements from '../pages/Dashboard/Agreements/Agreements';
import ManageMembers from '../pages/Dashboard/ManageMembers/ManageMembers';
import MakeAnnouncement from '../pages/Dashboard/MakeAnnouncement/MakeAnnouncement';
import ManageCoupons from '../pages/Dashboard/ManageCoupons/ManageCoupons';
import Announcements from '../pages/Dashboard/Announcements/Announcements';
import MakePayment from '../pages/Dashboard/MakePayment/MakePayment';
import Payment from '../pages/Dashboard/MakePayment/Payment/Payment';
import PaymentHistory from '../pages/Dashboard/PymentHistory/PaymentHistory';
import AdminRoute from './AdminRoute';

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
      {
        path: 'announcement',
        element: (
          <PrivateRoute>
            <Announcements></Announcements>
          </PrivateRoute>
        ),
      },

      // members routes

      {
        path: 'makePayment',
        element: (
          <PrivateRoute>
            <MakePayment></MakePayment>
          </PrivateRoute>
        ),
      },
      {
        path: 'payment/:month',
        element: <Payment></Payment>,
      },
      {
        path: 'paymentHistory',
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },

      // admin routes
      {
        path: 'adminProfile',
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: 'manageMembers',
        element: (
          <AdminRoute>
            <ManageMembers></ManageMembers>
          </AdminRoute>
        ),
      },
      {
        path: 'makeAnnouncement',
        element: (
          <AdminRoute>
            <MakeAnnouncement></MakeAnnouncement>
          </AdminRoute>
        ),
      },
      {
        path: 'agreement',
        element: (
          <AdminRoute>
            <Agreements></Agreements>
          </AdminRoute>
        ),
      },
      {
        path: 'manageCoupons',
        element: (
          <AdminRoute>
            <ManageCoupons></ManageCoupons>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;

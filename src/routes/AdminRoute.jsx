import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import loading from '../assets/loading.json';
import useRole from '../hooks/useRole';
import Lottie from 'lottie-react';

const AdminRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const [userRole, isLoading] = useRole();
  const location = useLocation();

  if (loader || isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Lottie
          className="h-[200px] w-[200px]"
          animationData={loading}
        ></Lottie>
      </div>
    );
  }

  if (user && userRole === 'admin') {
    return children;
  }

  return <Navigate to="/" state={location.pathname} replace></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.any,
};

export default AdminRoute;

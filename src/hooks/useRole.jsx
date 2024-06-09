import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userRole = '', isLoading } = useQuery({
    queryKey: ['userRole', user?.email],
    queryFn: async () => {
      if (!user?.email) return '';
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      return res.data?.userRole;
    },
    enabled: !!user?.email,
  });

  return [userRole, isLoading];
};

export default useRole;

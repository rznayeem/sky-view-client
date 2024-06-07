import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAgreement = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    data: agreement = [],
    isLoading,
  } = useQuery({
    queryKey: ['agreement', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreement/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [refetch, agreement, isLoading];
};

export default useAgreement;

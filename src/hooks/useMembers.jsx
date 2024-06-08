import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useMembers = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: members = [] } = useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      const res = await axiosSecure.get('/members');
      return res.data;
    },
  });

  return [refetch, members];
};

export default useMembers;

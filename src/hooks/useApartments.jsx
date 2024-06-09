import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useApartments = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: apartments = [] } = useQuery({
    queryKey: ['apartments'],
    queryFn: async () => {
      const res = await axiosPublic.get('/apartment');
      return res.data;
    },
  });

  return [refetch, apartments];
};

export default useApartments;

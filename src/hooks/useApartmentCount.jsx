import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useApartmentCount = () => {
  const axiosPublic = useAxiosPublic();

  const { data: apartmentCount = [] } = useQuery({
    queryKey: ['apartmentCount'],
    queryFn: async () => {
      const res = await axiosPublic.get('/apartmentCount');
      return res.data;
    },
  });

  return [apartmentCount];
};

export default useApartmentCount;

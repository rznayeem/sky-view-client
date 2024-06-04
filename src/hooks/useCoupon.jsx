import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useCoupon = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: coupons = [] } = useQuery({
    queryKey: ['coupons'],
    queryFn: async () => {
      const res = await axiosPublic.get('/coupons');
      return res.data;
    },
  });

  return [refetch, coupons];
};

export default useCoupon;

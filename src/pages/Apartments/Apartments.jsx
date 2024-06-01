import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Apartment from './Apartment/Apartment';
import Cover from '../Shared/Cover/Cover';

const Apartments = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: apartments = [] } = useQuery({
    queryKey: ['apartments'],
    queryFn: async () => {
      const res = await axiosPublic.get('/apartment');
      return res.data;
    },
  });

  return (
    <div>
      <Cover
        title={'/Apartment'}
        path={'Home'}
        headerTitle={'All Apartments'}
      ></Cover>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-24 max-w-7xl mx-auto">
        {apartments.map(apartment => (
          <Apartment key={apartment._id} apartment={apartment}></Apartment>
        ))}
      </div>
    </div>
  );
};

export default Apartments;

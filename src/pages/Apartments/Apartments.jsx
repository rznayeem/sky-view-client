import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Apartment from './Apartment/Apartment';
import Cover from '../Shared/Cover/Cover';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const Apartments = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: apartments = [] } = useQuery({
    queryKey: ['apartments'],
    queryFn: async () => {
      const res = await axiosPublic.get('/apartment');
      return res.data;
    },
  });

  const handleAgreement = (apartment, status) => {
    if (status === 'unavailable') {
      return toast.error('This apartment is unavailable!');
    }
    const currentDate = new Date().getTime();
    const agreementData = {
      user_name: user?.displayName,
      email: user?.email,
      floor: apartment.floor,
      block_name: apartment.block_name,
      apartment_no: apartment.apartment_no,
      rent: apartment.rent,
      status: 'pending',
      apartmentId: apartment._id,
      date: new Date(currentDate),
    };
    console.log(agreementData);
    axiosSecure.post('/agreement', agreementData).then(res => {
      console.log(res.data);
      if (!res.data.insertedId) {
        toast.error('You can not apply more than one apartment!');
      }
    });
  };

  return (
    <div>
      <Cover
        title={'/Apartment'}
        path={'Home'}
        headerTitle={'All Apartments'}
      ></Cover>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-24 max-w-7xl mx-auto">
        {apartments.map(apartment => (
          <Apartment
            key={apartment._id}
            apartment={apartment}
            handleAgreement={handleAgreement}
          ></Apartment>
        ))}
      </div>
    </div>
  );
};

export default Apartments;

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Timestamp from 'react-timestamp';

const Announcements = () => {
  const axiosSecure = useAxiosSecure();

  const { data: announcements = [] } = useQuery({
    queryKey: ['announcements'],
    queryFn: async () => {
      const res = await axiosSecure.get('/announcement');
      return res.data;
    },
  });

  return (
    <div className="py-24">
      {announcements.map(announcement => (
        <div
          key={announcement._id}
          className="container flex flex-col w-full lg:max-w-[65%] p-6 mx-auto divide-y rounded-md bg-white"
        >
          <div className="flex justify-between p-4">
            <div>
              <h4 className="font-bold text-black">{announcement.title}</h4>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-700">
              <Timestamp date={announcement.date}></Timestamp>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            {announcement.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcements;

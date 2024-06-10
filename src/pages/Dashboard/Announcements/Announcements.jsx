import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Timestamp from 'react-timestamp';
import { Helmet } from 'react-helmet';

const Announcements = () => {
  const axiosSecure = useAxiosSecure();

  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ['announcements'],
    queryFn: async () => {
      const res = await axiosSecure.get('/announcement');
      return res.data;
    },
  });

  return (
    <div className="py-24">
      <Helmet>
        <title>Sky View | Dashboard - Announcements</title>
      </Helmet>
      {isLoading ? (
        <div className="space-y-5">
          <div className="container flex flex-col w-full lg:max-w-[65%] p-6 mx-auto bg-white animate-pulse justify-center items-start rounded-md shadow-xl">
            {/* User profile  Skeleton */}
            <div className="w-full flex gap-2 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="w-[80%]">
                <div className="w-[30%] rounded-full bg-gray-300 h-[15px] mb-3"></div>
                <div className="w-[40%] rounded-full bg-gray-300 h-[15px]"></div>
              </div>
            </div>
            {/* user post skeleton */}
            <div className="mt-8 w-full">
              <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
              <div className="w-[90%] rounded-full bg-gray-300 h-[15px]"></div>
            </div>
          </div>
          <div className="container flex flex-col w-full lg:max-w-[65%] p-6 mx-auto bg-white animate-pulse justify-center items-start rounded-md shadow-xl">
            {/* User profile  Skeleton */}
            <div className="w-full flex gap-2 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="w-[80%]">
                <div className="w-[30%] rounded-full bg-gray-300 h-[15px] mb-3"></div>
                <div className="w-[40%] rounded-full bg-gray-300 h-[15px]"></div>
              </div>
            </div>
            {/* user post skeleton */}
            <div className="mt-8 w-full">
              <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
              <div className="w-[90%] rounded-full bg-gray-300 h-[15px]"></div>
            </div>
          </div>
          <div className="container flex flex-col w-full lg:max-w-[65%] p-6 mx-auto bg-white animate-pulse justify-center items-start rounded-md shadow-xl">
            {/* User profile  Skeleton */}
            <div className="w-full flex gap-2 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="w-[80%]">
                <div className="w-[30%] rounded-full bg-gray-300 h-[15px] mb-3"></div>
                <div className="w-[40%] rounded-full bg-gray-300 h-[15px]"></div>
              </div>
            </div>
            {/* user post skeleton */}
            <div className="mt-8 w-full">
              <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
              <div className="w-[90%] rounded-full bg-gray-300 h-[15px]"></div>
            </div>
          </div>
          <div className="container flex flex-col w-full lg:max-w-[65%] p-6 mx-auto bg-white animate-pulse justify-center items-start rounded-md shadow-xl">
            {/* User profile  Skeleton */}
            <div className="w-full flex gap-2 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="w-[80%]">
                <div className="w-[30%] rounded-full bg-gray-300 h-[15px] mb-3"></div>
                <div className="w-[40%] rounded-full bg-gray-300 h-[15px]"></div>
              </div>
            </div>
            {/* user post skeleton */}
            <div className="mt-8 w-full">
              <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
              <div className="w-[90%] rounded-full bg-gray-300 h-[15px]"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
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
      )}
    </div>
  );
};

export default Announcements;

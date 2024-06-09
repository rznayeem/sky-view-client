import useApartments from '../../../hooks/useApartments';
import useAuth from '../../../hooks/useAuth';
import { PieChart, Pie, Cell } from 'recharts';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useMembers from '../../../hooks/useMembers';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useApartmentCount from '../../../hooks/useApartmentCount';

const AdminProfile = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [apartmentCount] = useApartmentCount();
  const { user } = useAuth();
  const [, members] = useMembers();
  const { count } = apartmentCount;

  const { data: apartmentChecked = [] } = useQuery({
    queryKey: ['apartmentChecked'],
    queryFn: async () => {
      const res = await axiosPublic.get('/apartmentChecked');
      return res.data;
    },
  });

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const availableRooms = count - apartmentChecked.length;
  const availableRoomsPercentage = (availableRooms / count) * 100;
  const unAvailableRoomsPercentage = (apartmentChecked.length / count) * 100;

  const data = [
    { name: 'Group A', value: availableRooms },
    { name: 'Group B', value: apartmentChecked.length },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className=" py-24">
        <div className="flex flex-col justify-center max-w-[80%] mx-auto p-6 shadow-md rounded-xl sm:px-12 bg-[#EEF5F9] dark:text-gray-800">
          <div className="bg-[#405189] h-36 rounded-t-xl relative">
            <img
              src={user?.photoURL}
              alt=""
              className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-32 h-32 mx-auto rounded-full ring-2 ring-[#DC8756] aspect-square"
            />
          </div>
          <hr className="mt-24" />
          <div className="grid grid-cols-7 gap-6">
            <div className="my-2 col-span-3 bg-white rounded-lg shadow-md p-7 space-y-5">
              <h1 className="font-teko text-3xl font-bold">
                Profile Information :
              </h1>
              <h2 className="text-xl font-semibold sm:text-2xl font-teko ">
                Name: <span className="font-normal">{user?.displayName}</span>
              </h2>
              <p className="text-xl sm:text-base dark:text-gray-600">
                <span className="font-bold">Email:</span> {user?.email}
              </p>
              <p className="text-xl sm:text-base dark:text-gray-600">
                <span className="font-bold">User Type:</span> Admin
              </p>
              <h1 className="font-teko text-3xl font-bold">
                Users Information :
              </h1>
              <p className="text-xl sm:text-base dark:text-gray-600">
                <span className="font-bold">Total Users:</span> {users.length}
              </p>
              <p className="text-xl sm:text-base dark:text-gray-600">
                <span className="font-bold">Total Members:</span>{' '}
                {members.length}
              </p>
            </div>
            <div className="my-2 col-span-4 bg-white rounded-lg shadow-md p-7 space-y-5">
              <h1 className="font-teko text-3xl font-bold">
                Apartment Analytics :
              </h1>
              <div className="flex justify-center">
                <PieChart width={200} height={200}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="space-y-2 text-xl">
                <div>
                  <h3 className="text-center">Total Rooms: {count}</h3>
                  <div className="flex justify-between">
                    <div>
                      <h4>Available Rooms: {availableRooms}</h4>
                      <h4>Unavailable Rooms: {apartmentChecked.length}</h4>
                    </div>
                    <div>
                      <h3 className="text-[#0AB39C]">
                        {availableRoomsPercentage.toFixed(2)}%
                      </h3>
                      <h3 className="text-[#F06548]">
                        {unAvailableRoomsPercentage.toFixed(2)}%
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

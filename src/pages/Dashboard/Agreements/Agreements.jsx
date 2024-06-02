import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUser } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import {
  MdApartment,
  MdOutlineBedroomChild,
  MdOutlineMail,
} from 'react-icons/md';
import { VscDiffRenamed } from 'react-icons/vsc';
import Timestamp from 'react-timestamp';

const Agreements = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: agreements = [] } = useQuery({
    queryKey: ['agreements'],
    queryFn: async () => {
      const res = await axiosSecure.get('/agreement');
      return res.data;
    },
  });

  const handleApprove = apartment => {
    axiosSecure.patch('/');
  };

  return (
    <div className="bg-[#F5F5F5] h-screen">
      <div className=" py-28">
        <div className="overflow-x-auto lg:mx-28 rounded-2xl shadow-sm bg-white">
          <table className="table w-full overflow-hidden">
            {/* head */}
            <thead className="">
              <tr>
                <th></th>
                <th>Customer Details</th>
                <th>
                  <div className="flex gap-3 items-center">
                    <MdApartment /> Floor No
                  </div>
                </th>
                <th>
                  <div className="flex gap-3 items-center">
                    <VscDiffRenamed /> Block Name
                  </div>
                </th>
                <th>
                  <div className="flex gap-3 items-center">
                    <MdOutlineBedroomChild /> Room No
                  </div>
                </th>
                <th>Rent</th>
                <th>Request Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {agreements.map((agreement, idx) => (
                <tr className="hover" key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex flex-col items-start gap-3">
                      <h3 className="flex items-center gap-3">
                        <FaUser /> {agreement.user_name}
                      </h3>
                      <h3 className="flex items-center gap-3">
                        <MdOutlineMail /> {agreement.email}
                      </h3>
                    </div>
                  </td>
                  <td>{agreement.floor}</td>
                  <td>{agreement.block_name}</td>
                  <td>{agreement.apartment_no}</td>
                  <td>${agreement.rent}</td>
                  <td>
                    <Timestamp date={agreement.date}></Timestamp>
                  </td>
                  <th>
                    <button
                      onClick={() => handleApprove(apartment)}
                      className="btn btn-outline btn-success rounded-xl mr-4"
                    >
                      Approve
                    </button>
                    <button className="btn btn-outline btn-error rounded-xl">
                      Reject
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Agreements;

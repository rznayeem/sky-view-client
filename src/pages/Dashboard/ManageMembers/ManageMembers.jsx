import { FaTrash, FaUser } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useMembers from '../../../hooks/useMembers';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();

  const [refetch, members, isLoading] = useMembers();

  const handleMembers = member => {
    Swal.fire({
      title: 'Do you want to remove this member?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${member?.email}`).then(res => {
          refetch();
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: 'Removed!',
              text: `${member?.name} is no longer member.`,
              icon: 'success',
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Sky View | Dashboard - Manage Members</title>
      </Helmet>
      <div className=" py-28">
        <div className="overflow-x-auto mx-auto rounded-2xl shadow-sm md:w-[70%] bg-white">
          {isLoading ? (
            <table className="w-full bg-white animate-pulse table overflow-hidden lg:text-[16px]">
              {/* User profile  Skeleton */}
              <thead className="">
                <tr>
                  <th>
                    <div className="w-full rounded-full bg-gray-300 h-[40px] mb-3"></div>
                  </th>
                  <th>
                    <div className="w-full rounded-full bg-gray-300 h-[40px] mb-3"></div>
                  </th>
                  <th>
                    <div className="w-full rounded-full bg-gray-300 h-[40px] mb-3"></div>
                  </th>
                  <th>
                    <div className="w-full rounded-full bg-gray-300 h-[40px] mb-3"></div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                  <td>
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="table overflow-hidden lg:text-[16px]">
              {/* head */}
              <thead>
                <tr className="text-[16px]">
                  <th></th>
                  <th className="py-6">User Name</th>
                  <th>
                    <div className="flex gap-3 items-center">User Email</div>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {members.map((member, idx) => (
                  <tr
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine"
                    className="hover"
                    key={idx}
                  >
                    <td>{idx + 1}</td>
                    <td>
                      <h3 className="flex items-center gap-3">
                        <FaUser /> {member.name}
                      </h3>
                    </td>
                    <td>
                      <h3 className="flex items-center gap-3">
                        <MdOutlineMail /> {member.email}
                      </h3>
                    </td>
                    <th className="flex">
                      <button
                        onClick={() => handleMembers(member)}
                        className="btn btn-outline btn-error rounded-xl"
                      >
                        Remove <FaTrash></FaTrash>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageMembers;

import { FaTrash, FaUser } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useMembers from '../../../hooks/useMembers';

const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();

  const [refetch, members] = useMembers();

  const handleMembers = email => {
    axiosSecure.patch(`/users/${email}`).then(res => {
      refetch();
      console.log(res.data);
    });
  };

  return (
    <div>
      <div className=" py-28">
        <div className="overflow-x-auto mx-auto rounded-2xl shadow-sm md:w-[70%] bg-white">
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
                <tr className="hover" key={idx}>
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
                      onClick={() => handleMembers(member.email)}
                      className="btn btn-outline btn-error rounded-xl"
                    >
                      Remove <FaTrash></FaTrash>
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

export default ManageMembers;

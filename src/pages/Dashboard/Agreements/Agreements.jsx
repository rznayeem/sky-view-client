import { useQuery } from '@tanstack/react-query';
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import {
  MdApartment,
  MdOutlineBedroomChild,
  MdOutlineMail,
} from 'react-icons/md';
import { VscDiffRenamed } from 'react-icons/vsc';
import Timestamp from 'react-timestamp';
import { LiaMoneyCheckAltSolid } from 'react-icons/lia';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Agreements = () => {
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    data: agreements = [],
    isLoading,
  } = useQuery({
    queryKey: ['agreements'],
    queryFn: async () => {
      const res = await axiosSecure.get('/agreement');
      return res.data;
    },
  });

  const handleCheck = (agreement, check) => {
    const currentDate = new Date();

    const acceptDate = {
      currentDate,
    };

    Swal.fire({
      title: 'Are you sure?',
      text:
        check === 'approve'
          ? `Do you want to approve ${agreement.user_name}'s agreement?`
          : `Do you want to remove ${agreement.user_name}'s agreement?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:
        check === 'approve' ? 'Yes approve agreement!' : 'Yes, remove it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(
            `/agreement/checking/${agreement._id}?check=${check}&email=${agreement.email}&apartmentId=${agreement.apartmentId}`,
            acceptDate
          )
          .then(res => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: check === 'approve' ? 'Approved!' : 'Removed!',
                text:
                  check === 'approve'
                    ? 'Agreement accepted successfully!'
                    : 'Agreement rejected!',
                icon: 'success',
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="">
      <Helmet>
        <title>Sky View | Dashboard - Agreement Requests</title>
      </Helmet>
      <div className=" py-28">
        <div className="overflow-x-auto lg:mx-6 rounded-2xl shadow-sm bg-white">
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
            <table className="table w-full overflow-hidden lg:text-[16px]">
              {/* head */}
              <thead>
                <tr className="text-[16px]">
                  <th></th>
                  <th>Customer Details</th>
                  <th>
                    <div className="flex gap-3 items-center">
                      <MdApartment /> Apartment Details
                    </div>
                  </th>
                  <th>
                    <div className="flex gap-3 items-center">
                      <LiaMoneyCheckAltSolid />
                      Rent
                    </div>
                  </th>
                  <th>
                    <div className="flex gap-3 items-center">
                      <FaRegCalendarAlt />
                      Request Date
                    </div>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {agreements.map((agreement, idx) => (
                  <tr className="hover" key={idx}>
                    {agreement.status === 'pending' && (
                      <>
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
                        <td>
                          <div className="space-y-3">
                            <h1 className="flex items-center gap-2  font-semibold">
                              <span className="flex items-center gap-2 font-semibold text-[#797F87]">
                                <MdApartment /> Floor No:
                              </span>{' '}
                              {agreement.floor}
                            </h1>
                            <h1 className="flex items-center gap-2  font-semibold">
                              <span className="flex items-center gap-2 font-semibold text-[#797F87]">
                                <VscDiffRenamed /> Block Name:
                              </span>
                              {agreement.block_name}
                            </h1>
                            <h1 className="flex items-center gap-2  font-semibold">
                              <span className="flex items-center gap-2 text-[#797F87]">
                                <MdOutlineBedroomChild /> Room No:
                              </span>{' '}
                              {agreement.apartment_no}
                            </h1>
                          </div>
                        </td>
                        <td>${agreement.rent}</td>
                        <td className="text-[16px]">
                          <Timestamp date={agreement.date}></Timestamp>
                        </td>
                        <th className="flex">
                          <button
                            onClick={() => handleCheck(agreement, 'approve')}
                            className="btn btn-outline btn-success rounded-xl mr-4"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleCheck(agreement, 'reject')}
                            className="btn btn-outline btn-error rounded-xl"
                          >
                            Reject
                          </button>
                        </th>
                      </>
                    )}
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

export default Agreements;

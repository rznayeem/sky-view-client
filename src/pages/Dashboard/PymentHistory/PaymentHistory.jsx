import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import { LiaMoneyCheckAltSolid } from 'react-icons/lia';
import {
  MdApartment,
  MdOutlineBedroomChild,
  MdOutlineMail,
} from 'react-icons/md';
import { VscDiffRenamed } from 'react-icons/vsc';
import Timestamp from 'react-timestamp';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <div className=" py-28">
        <div className="overflow-x-auto lg:mx-16 rounded-2xl shadow-sm bg-white">
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
                    Payment Date
                  </div>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments.map((payment, idx) => (
                <tr className="hover" key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex flex-col items-start gap-3">
                      <h3 className="flex items-center gap-3">
                        <FaUser /> {payment.name}
                      </h3>
                      <h3 className="flex items-center gap-3">
                        <MdOutlineMail /> {payment.email}
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="space-y-3">
                      <h1 className="flex items-center gap-2  font-semibold">
                        <span className="flex items-center gap-2 font-semibold text-[#797F87]">
                          <MdApartment /> Floor No:
                        </span>{' '}
                        {payment.floor}
                      </h1>
                      <h1 className="flex items-center gap-2  font-semibold">
                        <span className="flex items-center gap-2 font-semibold text-[#797F87]">
                          <VscDiffRenamed /> Block Name:
                        </span>
                        {payment.block_name}
                      </h1>
                      <h1 className="flex items-center gap-2  font-semibold">
                        <span className="flex items-center gap-2 text-[#797F87]">
                          <MdOutlineBedroomChild /> Room No:
                        </span>{' '}
                        {payment.apartment_no}
                      </h1>
                    </div>
                  </td>
                  <td>${payment.rent}</td>
                  <td className="text-[16px]">
                    <Timestamp date={payment.date}></Timestamp>
                  </td>
                  <th className="flex"></th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
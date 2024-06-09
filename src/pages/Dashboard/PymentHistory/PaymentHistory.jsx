import { LiaMoneyCheckAltSolid } from 'react-icons/lia';
import Timestamp from 'react-timestamp';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';

const PaymentHistory = () => {
  const [searchValue, setSearchValue] = useState('');
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ['payments', user?.email, searchValue],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments/${user?.email}?search=${searchValue}`
      );
      return res.data;
    },
  });
  const handleSearch = e => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    setSearchValue(search);
  };

  return (
    <div>
      <div className="">
        <div className="relative">
          <Cover headerTitle={'Payment History'}></Cover>
          <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-full rounded-lg max-w-lg mx-auto mb-10 shadow-md">
            <form onSubmit={handleSearch} className="relative">
              <input
                className="input py-5 input-bordered h-full w-full"
                name="search"
                placeholder="Enter your payment month name"
              />
              <button className="bg-[#FF923E] absolute right-2 top-1/2  py-3 px-6 rounded-md -translate-y-1/2 w-auto h-auto min-h-0">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="overflow-x-auto lg:mx-16 rounded-2xl shadow-sm bg-white">
          <table className="table w-full overflow-hidden lg:text-[16px]">
            {/* head */}
            <thead>
              <tr className="text-[16px]">
                <th></th>
                <th>Payment Date</th>
                <th>Rent Month</th>
                <th>
                  <div className="flex gap-3 items-center">
                    <LiaMoneyCheckAltSolid />
                    Rent
                  </div>
                </th>
                <th>Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments.map((payment, idx) => (
                <tr className="hover" key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <Timestamp date={payment.date}></Timestamp>
                  </td>
                  <td>{payment.month}</td>
                  <td>${payment.rent}</td>
                  <td className="text-[16px]">{payment.transactionID}</td>
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

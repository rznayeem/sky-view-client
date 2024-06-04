import { useState } from 'react';
import useCoupon from '../../../hooks/useCoupon';
import { RiCoupon4Fill } from 'react-icons/ri';
import { FaPercent } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageCoupons = () => {
  const axiosSecure = useAxiosSecure();
  const [openModal, setOpenModal] = useState(false);
  const [refetch, coupons] = useCoupon();

  return (
    <div>
      <div className=" py-28">
        <div className="overflow-x-auto mx-auto rounded-2xl shadow-sm md:w-[70%] bg-white">
          <table className="table overflow-hidden lg:text-[16px]">
            {/* head */}
            <thead>
              <tr className="text-[16px]">
                <th></th>
                <th className="py-6">Coupon code</th>
                <th>
                  <div className="flex gap-3 items-center">Discount</div>
                </th>
                <th>
                  <div className="flex gap-3 items-center">
                    Coupon Description
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {coupons.map((coupon, idx) => (
                <tr className="hover" key={idx}>
                  <td>{idx + 1}</td>
                  <td>{coupon.coupon_code}</td>
                  <td>{coupon.discount_percentage}%</td>
                  <td>{coupon.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCoupons;

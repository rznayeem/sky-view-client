import { useState } from 'react';
import useCoupon from '../../../hooks/useCoupon';
import { RiCoupon4Fill } from 'react-icons/ri';
import { FaPercent } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageCoupons = () => {
  const axiosSecure = useAxiosSecure();
  const [openModal, setOpenModal] = useState(false);
  const [refetch, coupons] = useCoupon();

  const handleCoupon = e => {
    e.preventDefault();
    const form = e.target;
    const couponData = {
      coupon_code: form.coupon.value,
      discount_percentage: form.discount.value,
      description: form.description.value,
    };
    axiosSecure.post('/coupons', couponData).then(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New coupon added successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    });
  };

  return (
    <div>
      <div className=" py-28">
        <div className="px-20 py-6 mx-auto flex items-center justify-between border rounded-2xl shadow-sm md:w-[70%] bg-white mb-10">
          <h1 className="font-teko text-2xl font-semibold">Add a new coupon</h1>
          <div>
            <button
              onClick={() => setOpenModal(true)}
              className="btn bg-[#405189] text-white text-xl py-2 px-5"
            >
              Add Coupon
            </button>
            <div
              onClick={() => setOpenModal(false)}
              className={`fixed z-[100] flex items-center justify-center ${
                openModal ? 'opacity-1 visible' : 'invisible opacity-0'
              } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
            >
              <div
                onClick={e_ => e_.stopPropagation()}
                className={`absolute w-full rounded-lg backdrop-blur-sm bg-[#405189]/[.5] drop-shadow-2xl sm:w-[500px] ${
                  openModal
                    ? 'opacity-1 translate-y-0 duration-300'
                    : '-translate-y-20 opacity-0 duration-150'
                }`}
              >
                <form
                  onSubmit={handleCoupon}
                  className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
                >
                  <svg
                    onClick={() => setOpenModal(false)}
                    className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
                    </g>
                  </svg>
                  <h1 className="pb-8 text-4xl backdrop-blur-sm rounded-lg text-center text-white pt-5">
                    Coupon Details
                  </h1>
                  <div className="space-y-5">
                    <div className="flex gap-5">
                      <div>
                        <label
                          htmlFor="email_navigate_ui_modal"
                          className="block my-3 text-white font-medium text-xl"
                        >
                          Coupon Code
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="coupon"
                            placeholder="Coupon Code"
                            className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white "
                          />
                          <span className="absolute text-xl left-2 top-[30%]">
                            <RiCoupon4Fill />
                          </span>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email_navigate_ui_modal"
                          className="block my-3 text-white font-medium text-xl"
                        >
                          Discount Percentage
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="discount"
                            placeholder="Discount Percentage"
                            className="block w-full rounded-lg p-3 pl-8 outline-none drop-shadow-lg bg-white "
                          />
                          <span className="absolute text-xs left-2 top-[40%]">
                            <FaPercent />
                          </span>
                        </div>
                      </div>
                    </div>
                    <label
                      htmlFor="password_navigate_ui_modal"
                      className="block text-white font-medium text-xl"
                    >
                      Description
                    </label>
                    <div className="relative">
                      <textarea
                        className="textarea textarea-bordered w-full h-24"
                        placeholder="Description"
                        name="description"
                      ></textarea>
                    </div>
                  </div>
                  {/* button type will be submit for handling form submission*/}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="relative py-2.5 px-5 mx-auto rounded-lg mt-6 bg-white drop-shadow-lg"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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

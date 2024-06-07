import Select from 'react-select';
import './makePayment.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAgreement from '../../../hooks/useAgreement';
import { FaDollarSign } from 'react-icons/fa';

const MakePayment = () => {
  const [, agreement] = useAgreement();
  const [month, setMonth] = useState('');
  const [error, setError] = useState(false);
  const options = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ];

  const handleMonth = value => {
    setMonth(value.value);
  };
  const handleError = () => {
    if (month === '') {
      setError(true);
    }
  };

  return (
    <div className="py-24">
      <div className="card shrink-0 w-full mx-auto max-w-3xl shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              disabled
              defaultValue={agreement.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Floor No</span>
              </label>
              <input
                type="text"
                name="floor"
                disabled
                defaultValue={agreement.floor}
                placeholder="Floor no"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Block Name</span>
              </label>
              <input
                type="text"
                name="block_name"
                disabled
                defaultValue={agreement.block_name}
                placeholder="Block Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Apartment no</span>
              </label>
              <input
                type="text"
                name="apartment_no"
                disabled
                defaultValue={agreement.apartment_no}
                placeholder="Apartment no"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rent</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="rent"
                  disabled
                  defaultValue={agreement.rent}
                  placeholder="Monthly rent"
                  className="input input-bordered pl-6"
                  required
                />
                <span className="absolute text-xl left-2 top-1/2 -translate-y-1/2">
                  <FaDollarSign className="text-[16px] text-[#9DA1A7]" />
                </span>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Month</span>
              </label>
              <Select
                classNamePrefix="mySelect"
                options={options}
                onChange={handleMonth}
                required
              ></Select>
              {error && (
                <p className="text-red-600 text-xs">
                  *Please select your payment month
                </p>
              )}
            </div>
          </div>
          <Link
            to={month ? `/dashboard/payment/${month}` : ''}
            className="form-control mt-6"
          >
            <button
              onClick={handleError}
              className="btn bg-[#CD8C66] text-xl text-white font-semibold"
            >
              Pay
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;

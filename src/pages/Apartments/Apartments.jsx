import Apartment from './Apartment/Apartment';
import Cover from '../Shared/Cover/Cover';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Spinner from '../Shared/Spinner/Spinner';
import { useState } from 'react';
import useApartmentCount from '../../hooks/useApartmentCount';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Apartments = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  // const [refetch, apartments] = useApartments();
  const [apartmentCount] = useApartmentCount();
  const { user } = useAuth();
  const itemPerPage = 6;

  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ['apartments', pageNumber, itemPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/apartment?page=${pageNumber}&size=${itemPerPage}`
      );
      return res.data;
    },
  });

  const { count } = apartmentCount;
  if (!count) {
    return <Spinner></Spinner>;
  }

  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleAgreement = (apartment, status) => {
    if (status === 'unavailable') {
      return toast.error('This apartment is unavailable!');
    }
    const currentDate = new Date().getTime();
    const agreementData = {
      user_name: user?.displayName,
      email: user?.email,
      floor: apartment.floor,
      block_name: apartment.block_name,
      apartment_no: apartment.apartment_no,
      rent: apartment.rent,
      status: 'pending',
      apartmentId: apartment._id,
      date: new Date(currentDate),
    };
    console.log(agreementData);
    axiosSecure.post('/agreement', agreementData).then(res => {
      console.log(res.data);
      if (!res.data.insertedId) {
        toast.error('You can not apply more than one apartment!');
      } else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title:
            'Agreement applied successfully! Please wait for the confirmation',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Sky View | Apartments</title>
      </Helmet>
      <Cover
        title={'/Apartment'}
        path={'Home'}
        headerTitle={'All Apartments'}
      ></Cover>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-24 max-w-7xl mx-auto">
        {isLoading ? (
          <>
            <div className=" p-6 rounded-md bg-white shadow-md mx-auto w-full">
              <div className="animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-full h-72 rounded-lg bg-gray-300 mb-6"></div>
                {/* Product Title Skeleton */}
                <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* product heading skeleton */}
                <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* Product Description Skeleton */}
                <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                <div className="w-full h-14 rounded-lg bg-gray-300 mb-4"></div>
              </div>
            </div>
            <div className=" p-6 rounded-md bg-white shadow-md mx-auto w-full">
              <div className="animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-full h-72 rounded-lg bg-gray-300 mb-6"></div>
                {/* Product Title Skeleton */}
                <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* product heading skeleton */}
                <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* Product Description Skeleton */}
                <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                <div className="w-full h-14 rounded-lg bg-gray-300 mb-4"></div>
              </div>
            </div>
            <div className=" p-6 rounded-md bg-white shadow-md mx-auto w-full">
              <div className="animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-full h-72 rounded-lg bg-gray-300 mb-6"></div>
                {/* Product Title Skeleton */}
                <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* product heading skeleton */}
                <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* Product Description Skeleton */}
                <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                <div className="w-full h-14 rounded-lg bg-gray-300 mb-4"></div>
              </div>
            </div>
            <div className=" p-6 rounded-md bg-white shadow-md mx-auto w-full">
              <div className="animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-full h-72 rounded-lg bg-gray-300 mb-6"></div>
                {/* Product Title Skeleton */}
                <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* product heading skeleton */}
                <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* Product Description Skeleton */}
                <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                <div className="w-full h-14 rounded-lg bg-gray-300 mb-4"></div>
              </div>
            </div>
            <div className=" p-6 rounded-md bg-white shadow-md mx-auto w-full">
              <div className="animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-full h-72 rounded-lg bg-gray-300 mb-6"></div>
                {/* Product Title Skeleton */}
                <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* product heading skeleton */}
                <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* Product Description Skeleton */}
                <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                <div className="w-full h-14 rounded-lg bg-gray-300 mb-4"></div>
              </div>
            </div>
            <div className=" p-6 rounded-md bg-white shadow-md mx-auto w-full">
              <div className="animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-full h-72 rounded-lg bg-gray-300 mb-6"></div>
                {/* Product Title Skeleton */}
                <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* product heading skeleton */}
                <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                {/* Product Description Skeleton */}
                <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                <div className="w-full h-14 rounded-lg bg-gray-300 mb-4"></div>
              </div>
            </div>
          </>
        ) : (
          apartments.map(apartment => (
            <Apartment
              key={apartment._id}
              apartment={apartment}
              handleAgreement={handleAgreement}
            ></Apartment>
          ))
        )}
      </div>
      <div className="flex select-none justify-center items-center gap-5 mb-24">
        {/* left arrow */}
        <div
          onClick={() => {
            pageNumber > 1 && setPageNumber(pageNumber - 1);
          }}
          className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-sky-200 px-1 py-1 rounded-full"
        >
          <svg
            className="w-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M15 7L10 12L15 17"
                stroke="#0284C7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{' '}
            </g>
          </svg>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          {pages.map((item, ind) => (
            <div
              onClick={() => {
                setPageNumber(item + 1);
              }}
              className={`cursor-pointer shadow-md border hover:scale-110 scale-100 transition-all duration-200 px-5 ${
                pageNumber === item + 1 ? 'bg-[#DC8756] text-white' : 'bg-white'
              } border-[#e17b3f]  font-semibold text-gray-700   py-3 rounded-full`}
              key={item}
            >
              {item + 1}
            </div>
          ))}
        </div>
        {/* right arrow */}
        <div
          onClick={() => {
            pageNumber < pages.length && setPageNumber(pageNumber + 1);
          }}
          className="bg-gray-200 hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-sky-100 px-4 py-4 rounded-full"
        >
          <svg
            className="w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                fill="#000000"
              />{' '}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Apartments;

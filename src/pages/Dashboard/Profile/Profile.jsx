import { PiBathtub } from 'react-icons/pi';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import { MdOutlineBed } from 'react-icons/md';
import { TfiRuler } from 'react-icons/tfi';
import Timestamp from 'react-timestamp';
import useAgreement from '../../../hooks/useAgreement';

const Profile = () => {
  const { user } = useAuth();
  const [userRole] = useRole();

  const [agreement] = useAgreement();

  return (
    <div className=" py-24">
      <div className="flex flex-col justify-center max-w-[80%] mx-auto p-6 shadow-md rounded-xl sm:px-12 bg-[#EEF5F9] dark:text-gray-800">
        <div className="bg-[#CD8C66] h-36 rounded-t-xl relative">
          <img
            src={user?.photoURL}
            alt=""
            className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-32 h-32 mx-auto rounded-full ring-2 ring-[#CD8C66] aspect-square"
          />
        </div>
        <hr className="mt-24" />
        <div className="w-full flex items-center gap-6">
          <div className="my-2 w-[40%] bg-white rounded-lg shadow-md p-7 space-y-5">
            <h1 className="font-teko text-3xl font-bold">
              Profile Information :
            </h1>
            <h2 className="text-xl font-semibold sm:text-2xl font-teko ">
              Name: <span className="font-normal">{user?.displayName}</span>
            </h2>
            <p className="text-xl sm:text-base dark:text-gray-600">
              <span className="font-bold">Email:</span> {user?.email}
            </p>
            <p className="text-xl sm:text-base dark:text-gray-600">
              <span className="font-bold">User Type:</span>{' '}
              {userRole ? userRole : 'Basic User'}
            </p>
          </div>
          <div className="my-2 w-[60%] bg-white rounded-lg shadow-md p-7 space-y-5">
            <h1 className="font-teko text-3xl font-bold">
              Your Apartment Information :
            </h1>
            {userRole === 'member' ? (
              <div className="space-y-2">
                <h3>
                  <span className="font-medium text-xl">
                    Agreement accept date:
                  </span>{' '}
                  <Timestamp date={agreement.accept_date}></Timestamp>{' '}
                </h3>
                <div className="flex items-center gap-4 text-xl">
                  <PiBathtub />
                  <h4>Floor: {agreement.floor}</h4>
                </div>
                <div className="flex items-center gap-4 text-xl">
                  <MdOutlineBed />
                  <h4>Block Name:{agreement.block_name}</h4>
                </div>
                <div className="flex items-center gap-4 text-xl">
                  <TfiRuler />
                  <h4>Apartment No: {agreement.apartment_no}</h4>
                </div>
              </div>
            ) : (
              <div>
                <h3>You have not booked any apartment yet..</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

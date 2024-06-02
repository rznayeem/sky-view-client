import { FaFileAlt, FaHome, FaUsersCog } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
import { PiUserSwitchDuotone } from 'react-icons/pi';
import { HiSpeakerphone } from 'react-icons/hi';
import { RiCoupon3Line } from 'react-icons/ri';
import { LuHistory } from 'react-icons/lu';
import useRole from '../hooks/useRole';

const Dashboard = () => {
  // const isAdmin = true;
  // const isMember = true;

  const [userRole] = useRole();
  console.log(userRole);

  return (
    <div className="flex">
      <div className="drawer border lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}

          <div className="bg-[#D8D9DB]">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-transparent border-none text-2xl drawer-button lg:hidden"
            >
              <IoMenuSharp />
            </label>
          </div>
          <div className="my-28">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#CD8C66] text-[18px] text-white space-y-3">
            {/* Sidebar content here */}
            {userRole === 'admin' ? (
              <>
                <li className=" rounded-md border border-white  p-2">
                  <img
                    className="bg-white hover:bg-black/[.5]"
                    src={logo}
                    alt=""
                  />
                </li>
                <div className="divider before:bg-white after:bg-white"></div>
                <li>
                  <NavLink to={'/dashboard/adminProfile'}>
                    <span className="bg-white text-xl p-2 text-[#CD8C66] rounded-md shadow-lg mr-3">
                      <PiUserSwitchDuotone />
                    </span>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/manageMembers'}>
                    <span className="bg-white text-xl p-2 text-[#CD8C66] rounded-md shadow-lg mr-3">
                      <FaUsersCog />
                    </span>
                    Manage Members
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/announcement'}>
                    <span className="bg-white text-xl p-2 text-[#CD8C66] rounded-md shadow-lg mr-3">
                      <HiSpeakerphone />
                    </span>
                    Make Announcement
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/makeAnnouncement'}>
                    <span className="bg-white text-xl p-2 text-[#CD8C66] rounded-md shadow-lg mr-3">
                      <FaFileAlt />
                    </span>
                    Agreement Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/manageCoupons'}>
                    <span className="bg-white text-xl p-2 text-[#CD8C66] rounded-md shadow-lg mr-3">
                      <RiCoupon3Line />
                    </span>
                    Manage Coupons
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className=" rounded-md border border-white  p-2">
                  <img
                    className="bg-white hover:bg-black/[.5]"
                    src={logo}
                    alt=""
                  />
                </li>
                <div className="divider before:bg-white after:bg-white"></div>
                <li>
                  <NavLink to={'/dashboard/adminProfile'}>
                    <span className="bg-white text-xl p-2 text-[#CD8C66] rounded-md shadow-lg mr-3">
                      <PiUserSwitchDuotone />
                    </span>
                    My Profile
                  </NavLink>
                </li>
                {userRole === 'member' && (
                  <>
                    <li>
                      <NavLink to={'/dashboard/makePayment'}>
                        <span className="bg-white text-xl p-2 text-[#CD8C66] rounded-md shadow-lg mr-3">
                          <MdPayment />
                        </span>
                        Make Payment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={'/dashboard/announcement'}>
                        <span className="bg-white text-xl p-2 text-[#CD8C66] rounded-md shadow-lg mr-3">
                          <LuHistory />
                        </span>
                        Payment History
                      </NavLink>
                    </li>
                  </>
                )}
                <li>
                  <NavLink to={'/dashboard/announcement'}>
                    <span className="bg-white text-xl p-2 text-[#CD8C66] rounded-md shadow-lg mr-3">
                      <HiSpeakerphone />
                    </span>
                    Announcements
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider before:bg-white after:bg-white"></div>
            <li>
              <NavLink to={'/'}>
                <FaHome></FaHome>Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

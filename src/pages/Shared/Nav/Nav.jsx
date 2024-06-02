import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import useAuth from '../../../hooks/useAuth';
import { IoPersonSharp } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';

const Nav = () => {
  const { user, logOut, loader } = useAuth();
  // const location = useLocation();
  const links = (
    <>
      <li
        className={`btn h-auto w-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-[#CD8C66] text-xl font-medium text-white`}
      >
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li
        className={`btn h-auto w-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-[#CD8C66] text-xl font-medium text-white`}
      >
        <NavLink to={'/apartment'}>Apartment</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed bg-black/[.5] z-50 md:px-14 mx-auto h-28">
      <div className="navbar-start">
        <div data-aos="fade-down" className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-xl bg-[#CD8C66] dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to={'/'}
          className="btn bg-transparent hover:bg-transparent outline-none shadow-none border-none text-xl min-h-0 w-auto h-auto"
        >
          <img
            data-aos="fade-right"
            className="max-h-16"
            src={logo}
            alt="Yum Yacht"
          />
        </Link>
      </div>
      <div data-aos="fade-down" className="navbar-center hidden lg:flex"></div>
      <div data-aos="fade-left" className="navbar-end">
        <ul className="text-xl font-medium bg-transparent flex items-center mr-10">
          {links}
        </ul>
        {loader ? (
          <div className="flex flex-row-reverse gap-4 items-center">
            <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
        ) : user ? (
          <div className="dropdown  dropdown-hover dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-auto h-auto bg-transparent rounded-full border-none shadow-none hover:bg-transparent"
            >
              <div>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-[#CD8C66] ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        user?.photoURL ||
                        'https://i.ibb.co/wMhfdTN/user-profile-icon.png'
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[100] space-y-5 bg-[#CD8C66]/[.8] border-2 border-orange-300 menu p-2 shadow rounded-box lg:w-[330px] w-[250px]"
            >
              <div className="avatar justify-center mt-5">
                <div className="w-10 rounded-full ring ring-[#CD8C66] ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user?.photoURL ||
                      'https://i.ibb.co/wMhfdTN/user-profile-icon.png'
                    }
                  />
                </div>
              </div>
              <div className="flex justify-center text-2xl">
                <h3 className="flex items-center gap-3">
                  <IoPersonSharp /> {user?.displayName || 'N/A'}
                </h3>
              </div>
              <div className="flex flex-col p-5 ">
                <Link
                  to={'/dashboard'}
                  className="text-xl ml-2 mb-2  btn h-auto w-auto shadow-none outline-none bg-transparent hover:bg-transparent border-none justify-start text-white"
                >
                  Dashboard
                </Link>
                <hr />
                <Link
                  className="text-xl ml-2 mb-2  btn h-auto w-auto shadow-none outline-none bg-transparent hover:bg-transparent border-none justify-start text-white"
                  to={'/login'}
                  onClick={() => logOut()}
                >
                  Logout <FiLogOut />
                </Link>
              </div>
            </ul>
          </div>
        ) : (
          <Link to={'/login'} className="btn bg-[#ff923e] text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;

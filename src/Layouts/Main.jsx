import { Outlet } from 'react-router-dom';
import Nav from '../pages/Shared/Nav/Nav';
import Footer from '../pages/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
  return (
    <div className="font-manrope">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Main;

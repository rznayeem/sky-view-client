import { Outlet } from 'react-router-dom';
import Nav from '../pages/Shared/Nav/Nav';
import Footer from '../pages/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-manrope overflow-hidden">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Main;

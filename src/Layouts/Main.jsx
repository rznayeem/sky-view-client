import { Outlet } from 'react-router-dom';
import Nav from '../pages/Shared/Nav/Nav';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
  return (
    <div className="font-manrope">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

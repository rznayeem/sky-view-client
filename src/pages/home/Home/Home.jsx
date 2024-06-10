import { Helmet } from 'react-helmet';
import AboutBuilding from '../components/AboutBuilding/AboutBuilding';
import Banner from '../components/Banner/Banner';
import Coupons from '../components/Coupons/Coupons';
import Maps from '../components/Maps/Maps';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sky View | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="md:mx-10 mx-5">
        <AboutBuilding></AboutBuilding>
        <Coupons></Coupons>
        <Maps></Maps>
      </div>
    </div>
  );
};

export default Home;

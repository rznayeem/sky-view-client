import Lottie from 'lottie-react';
import loading from '../../../assets/loading.json';

const Spinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Lottie className="h-[200px] w-[200px]" animationData={loading}></Lottie>
    </div>
  );
};

export default Spinner;

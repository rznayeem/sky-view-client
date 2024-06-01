import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import header from '../../../assets/cover.jpg';

const Cover = ({ headerTitle, title, path }) => {
  return (
    <div
      className="flex items-center justify-center text-white h-96 bg-cover bg-center bg-black/[.5] bg-blend-multiply"
      style={{
        backgroundImage: `url(${header})`,
      }}
    >
      <div className="text-center pt-24 space-y-6">
        <h1 className="text-7xl font-bold font-mercellus">{headerTitle}</h1>
        <p className=" text-2xl">
          <Link to={'/'} className="hover:text-orange-400">
            {path}
          </Link>
          {title}
        </p>
      </div>
    </div>
  );
};

Cover.propTypes = {
  headerTitle: PropTypes.any,
  path: PropTypes.any,
  title: PropTypes.any,
};

export default Cover;

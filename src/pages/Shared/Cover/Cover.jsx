import React from 'react';
import { Link } from 'react-router-dom';

const Cover = ({ headerImg, title, path }) => {
  return (
    <div
      className="flex items-center justify-center text-white h-96 bg-cover bg-center bg-black/[.5] bg-blend-multiply"
      style={{
        backgroundImage: `url(${headerImg})`,
      }}
    >
      <div className="text-center pt-24 space-y-6">
        <h1 className="text-7xl font-bold font-mercellus">Account</h1>
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

export default Cover;

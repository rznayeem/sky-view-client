import { MdOutlineBed } from 'react-icons/md';
import { PiBathtub } from 'react-icons/pi';
import { TfiRuler } from 'react-icons/tfi';

const Apartment = ({ apartment, handleAgreement }) => {
  const {
    image,
    floor,
    block_name,
    apartment_no,
    rent,
    title,
    bath,
    room,
    area,
    _id,
  } = apartment;

  return (
    <div>
      <div>
        <div className="relative border border-[#CD8C66]">
          <div className="overflow-hidden">
            <img
              src={image}
              alt=""
              className=" object-cover object-center w-full h-72 transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <p className="absolute top-3 left-3 bg-[#CD8C66] px-3 rounded-md text-white">
            {rent} sold
          </p>

          <div className="flex items-center relative p-6 space-y-4">
            <div className="w-[50%] space-y-2">
              <h1 className="text-3xl font-teko font-semibold">{title}</h1>
              <h3 className="font-bold text-xl">${rent}</h3>
            </div>
            <div className="space-y-2 w-[50%]">
              <div className="flex items-center gap-4 text-xl">
                <PiBathtub />
                <h4>{bath} bath</h4>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <MdOutlineBed />
                <h4>{room} Bed</h4>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <TfiRuler />
                <h4>Area: {area} sqft</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center overflow-hidden">
            <button
              onClick={() => handleAgreement(apartment)}
              className="group transition ease-in-out hover:scale-110 relative z-50 h-16 w-full overflow-hidden bg-[#CD8C66] text-xl text-white duration-500"
            >
              Agreement
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000">
                Agreement
              </span>
              <span className="absolute inset-0 -translate-y-full bg-black group-hover:translate-y-0 group-hover:duration-1000"></span>
              <span className="absolute inset-0 translate-y-full bg-black group-hover:translate-y-0 group-hover:duration-1000"></span>
              <span className="absolute inset-0 translate-x-full bg-black delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span>
              <span className="absolute inset-0 -translate-x-full bg-black delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;

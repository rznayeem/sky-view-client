import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { FaLocationDot } from 'react-icons/fa6';
import 'leaflet/dist/leaflet.css';
import HeaderTitle from '../../../Shared/HeaderTitle/HeaderTitle';

const Maps = () => {
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 ">
        <HeaderTitle
          subTitle={'Our Location'}
          title={'How to find us?'}
        ></HeaderTitle>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="500"
          className="flex flex-col max-w-7xl mx-auto overflow-hidden rounded"
        >
          <div className="map">
            <MapContainer
              center={[39.97298879527249, -75.1441956779889]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[39.97298879527249, -75.1441956779889]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50 z-10 shadow-md">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center gap-4 text-2xl font-semibold sm:text-3xl"
              >
                <FaLocationDot /> 1433 N 5th St, Philadelphia, PA 19122, USA
              </a>
              <p className="text-xs dark:text-gray-600">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  Admin
                </a>
              </p>
            </div>
            <div className="">
              <p>
                Welcome to the Building Map section! Here, you can explore a
                detailed map of our building, designed to help you navigate and
                familiarize yourself with our facilities. Whether you&apos;re a
                new tenant, a visitor, or a long-term resident, this interactive
                map provides a comprehensive overview of each floor and area
                within our property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;

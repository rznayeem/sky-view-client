import HeaderTitle from '../../../Shared/HeaderTitle/HeaderTitle';
import icon1 from '../../../../assets/icon1.png';
import icon2 from '../../../../assets/icon2.png';
import icon3 from '../../../../assets/icon3.png';
import icon4 from '../../../../assets/icon4.png';

const AboutBuilding = () => {
  return (
    <div>
      <HeaderTitle
        subTitle={'Building Overview'}
        title={'about our building'}
      ></HeaderTitle>
      <div className="max-w-7xl mx-auto md:flex items-center gap-20">
        <div className="relative lg:w-1/2">
          <img
            src="https://avalonbay-avalon-communities-prod.cdn.arcpublishing.com/resizer/aX_7AaYdc6ONIwICoHPy9U-z48g=/715x486/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/avalonbay/4W4DB7GWMJC5XAIZD6GGARELBE.jpg"
            alt=""
          />
          <div className="h-full hidden md:flex absolute -top-10 left-10 border-8 border-[#CD8C66] w-full"></div>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-[#221C13] font-teko text-5xl font-medium">
            THE HIGH PREMIUM QUALITY LUXURY APARTMENTS
          </h1>
          <h3 className="text-[#CD8C66] text-2xl font-semibold">
            Many important brands have given us their trust
          </h3>
          <p>
            Interior of volumes, space, air, proportion, with certain light and
            mood. These interiors are meant to last forever. Open space and
            infinity view that will bring luxury life style in your life
          </p>
          <p>
            🌟 <span className="font-bold text-xl">Architectural Marvel:</span>{' '}
            Behold a masterpiece born from the visionary minds of renowned
            architects, where every line, curve, and contour converges to create
            an awe-inspiring symphony of design.
          </p>
          <p>
            💡 <span className="font-bold text-xl">Innovative Design:</span> At
            the forefront of innovation, our building redefines the skyline with
            its avant-garde features and sustainable solutions. From
            cutting-edge technology to eco-conscious materials, every element is
            meticulously crafted to harmonize with the environment.
          </p>
        </div>
      </div>
      <div className="max-w-7xl py-24 mx-auto grid lg:grid-cols-4 gap-6">
        <div className=" md:w-[270px] h-[210px] shadow-2xl py-10">
          <div className="flex justify-between">
            <div className="bg-gradient-to-l from-[#221C13]/[.3] via-[#221C13]/[.1] to-transparent w-24 h-16"></div>
            <div className="pr-6">
              {/* <FaRulerCombined className="text-7xl text-[#CD8C66]" /> */}
              <img src={icon1} alt="" />
            </div>
          </div>
          <div className="pl-10 pt-6">
            <h3 className="text-3xl font-bold font-teko">34,000</h3>
            <p>Total sqft Areas</p>
          </div>
        </div>
        <div className=" md:w-[270px] h-[210px] shadow-2xl py-10">
          <div className="flex justify-between">
            <div className="bg-gradient-to-l from-[#221C13]/[.3] via-[#221C13]/[.1] to-transparent w-24 h-16"></div>
            <div className="pr-6">
              {/* <FaRulerCombined className="text-7xl text-[#CD8C66]" /> */}
              <img src={icon2} alt="" />
            </div>
          </div>
          <div className="pl-10 pt-6">
            <h3 className="text-3xl font-bold font-teko">680</h3>
            <p>Total Car Pakings</p>
          </div>
        </div>
        <div className=" md:w-[270px] h-[210px] shadow-2xl py-10">
          <div className="flex justify-between">
            <div className="bg-gradient-to-l from-[#221C13]/[.3] via-[#221C13]/[.1] to-transparent w-24 h-16"></div>
            <div className="pr-6">
              {/* <FaRulerCombined className="text-7xl text-[#CD8C66]" /> */}
              <img src={icon3} alt="" />
            </div>
          </div>
          <div className="pl-10 pt-6">
            <h3 className="text-3xl font-bold font-teko">380</h3>
            <p>Luxury Apartments</p>
          </div>
        </div>
        <div className=" md:w-[270px] h-[210px] shadow-2xl py-10">
          <div className="flex justify-between">
            <div className="bg-gradient-to-l from-[#221C13]/[.3] via-[#221C13]/[.1] to-transparent w-24 h-16"></div>
            <div className="pr-6">
              {/* <FaRulerCombined className="text-7xl text-[#CD8C66]" /> */}
              <img src={icon4} alt="" />
            </div>
          </div>
          <div className="pl-10 pt-6">
            <h3 className="text-3xl font-bold font-teko">760</h3>
            <p>Deluxe Bedrooms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;

import PropTypes from 'prop-types';
const HeaderTitle = ({ subTitle, title }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="500"
      className="font-teko text-center py-12"
    >
      <h3 className="text-[#CC8B66] text-xl">{subTitle}</h3>
      <h1 className="uppercase font-medium text-5xl">{title}</h1>
    </div>
  );
};

HeaderTitle.propTypes = {
  subTitle: PropTypes.any,
  title: PropTypes.any,
};

export default HeaderTitle;

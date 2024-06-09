import couponDivider from '../../../../assets/cupon-devider.png';
import useCoupon from '../../../../hooks/useCoupon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Grid, Autoplay, FreeMode, Pagination } from 'swiper/modules';

const Coupons = () => {
  const [, coupons] = useCoupon();

  return (
    <section className="max-w-7xl mx-auto mb-10 p-6 lg:p-0 flex flex-col text-center">
      <h2 className="raleway-font text-4xl font-bold pb-12">
        Best offers for you
      </h2>
      <div className="">
        <div className=" flex items-center" data-aos="fade-up">
          <div className="container mx-auto">
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1440: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1549: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              grid={{
                rows: 2,
                fill: 'row',
              }}
              slidesPerView={1}
              spaceBetween={30}
              freeMode={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Autoplay, FreeMode, Pagination]}
              className="mySwiper"
            >
              {coupons.map(coupon => (
                <SwiperSlide key={coupon._id}>
                  <div className="relative flex justify-between items-center py-14 px-7 bg-gradient-to-b from-[#DC8756] via-[#DC8756]/[.8] to-[#DC8756] rounded-3xl bg-no-repeat bg-[center]">
                    <div
                      className="absolute left-2/3 top-0 -translate-x-2/3 h-full w-full bg-no-repeat bg-center hidden lg:flex"
                      style={{
                        backgroundImage: `url(${couponDivider})`,
                      }}
                    ></div>
                    <div>
                      <h2 className="font-black text-[40px]">
                        {coupon.discount_percentage}% OFF
                      </h2>
                      <p className="text-[14px]">{coupon.description}</p>
                      <p className="text-[14px]">use by next month</p>
                    </div>
                    <div className="raleway-font">
                      <h2 id="first-coupon" className="text-4xl font-bold">
                        {coupon.coupon_code}
                      </h2>
                      <p>Coupon Code</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coupons;

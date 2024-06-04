import Lottie from 'lottie-react';
import { useCallback, useEffect, useState } from 'react';
import arrow from '../../../../assets/arrow.json';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    'https://i.imgur.com/XhkJYnS.jpeg',
    'https://i.imgur.com/Q2p9kFg.jpeg',
    'https://i.imgur.com/1c6hEpL.jpeg',
  ];
  const prevSlider = () =>
    setCurrentSlider(currentSlider =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider(currentSlider =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="w-full lg:h-[100vh] overflow-hidden relative">
      {/* arrow left */}
      <div className="lg:h-[100vh] md:h-[100vh] sm:h-[50vh]">
        <button
          onClick={prevSlider}
          className="absolute lg:top-1/2 md:top-1/2 top-1/4 left-3 z-50 flex justify-center items-center rounded-full w-12 h-12 md:w-20 md:h-20"
        >
          <Lottie className="-rotate-90" animationData={arrow}></Lottie>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="absolute lg:top-1/2 md:top-1/2 top-1/4 z-[50] right-3  flex justify-center items-center rounded-full w-12 h-12 md:w-20 md:h-20"
        >
          <Lottie className="rotate-90" animationData={arrow}></Lottie>
        </button>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {carouselImages.map((_, inx) => (
            <button
              key={_}
              onClick={() => setCurrentSlider(inx)}
              className={`rounded-full duration-500 bg-white ${
                currentSlider === inx ? 'w-8' : 'wz-2'
              } h-2`}
            ></button>
          ))}
        </div>
        {/* Carousel container */}
        <div
          className="ease-linear duration-500 flex transform-gpu"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {carouselImages.map((slide, inx) => (
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              key={slide}
              src={slide}
              className="min-w-full bg-black/[.5] bg-blend-multiply h-[50vh] md:h-[100vh] lg:h-[100vh] object-cover"
              alt={`Slider - ${inx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 w-full h-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:text-white lg:text-white p-7 bg-black/[.5] space-y-3">
        <div className="absolute space-y-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            className="lg:text-6xl text-4xl font-semibold font-mercellus"
          >
            <span className="mb-6">
              {' '}
              Discover Elevated Living <br /> at{' '}
            </span>
            <span className="text-[#2AB3FF]">
              <Typewriter loop={5} words={['Sky View']}></Typewriter>
            </span>
          </h1>
          <p>
            Discover a new perspective on luxury living at Sky View. Our
            meticulously curated spaces offer more than just a place to call
            home—they provide an escape from the ordinary.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

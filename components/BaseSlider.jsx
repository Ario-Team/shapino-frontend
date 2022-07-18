import { Swiper } from "swiper/react";

import "swiper/css";

const BaseSlider = ({ title, children }) => {
  return (
    <div className="w-11/12 mx-auto flex flex-col gap-5 lg:mx-0 lg:w-full">
      <div className="w-full flex flex-row justify-between items-center">
        <span className="font-kalameh font-bold text-xl">{title}</span>
        <span className="font-iran-yekan font-medium text-base cursor-pointer text-[#3F8CFF] transition-all duration-300 hover:drop-shadow-md">
          مشاهده همه
        </span>
      </div>
      <Swiper
        direction="horizontal"
        className="w-screen lg:w-full "
        slidesPerView={2}
        style={{
          paddingBlock: 24,
          paddingInline: 2,
        }}
        breakpoints={{
          700: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1370: {
            slidesPerView: 5,
          },
          1920: {
            slidesPerView: 6,
          },
        }}
        breakpointsBase="container"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default BaseSlider;

import { Swiper } from "swiper/react";

import "swiper/css";

const BaseSlider = ({
  title,
  children,
  customBreakpoints,
  customStarterView,
  className,
}) => {
  return (
    <div
      className={`w-11/12 mx-auto flex flex-col lg:mx-0 lg:w-full ${className}`}
    >
      <div className="w-full flex flex-row justify-between items-center">
        <span className="font-kalameh font-bold text-xl">{title}</span>
        <span className="font-iran-yekan font-medium text-base cursor-pointer text-[#3F8CFF] transition-all duration-300 hover:drop-shadow-md">
          مشاهده همه
        </span>
      </div>
      <Swiper
        direction="horizontal"
        className="w-screen lg:w-full"
        centeredSlidesBounds
        slidesPerView={customStarterView ? customStarterView : 1}
        style={{
          paddingBlock: 24,
          paddingLeft: 10,
        }}
        breakpoints={
          customBreakpoints
            ? customBreakpoints
            : {
                1: {
                  slidesPerView: 2,
                  spaceBetween: 180,
                  style: {
                    overflowX: "visible",
                  },
                },
                580: {
                  slidesPerView: 3,
                  spaceBetween: 210,
                },
                800: {
                  slidesPerView: 4,
                  spaceBetween: 210,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 230,
                },
                1500: {
                  slidesPerView: 6,
                  spaceBetween: 250,
                },
                1920: {
                  slidesPerView: 6,
                  spaceBetween: 15,
                },
                2064: {
                  slidesPerView: 9,
                  spaceBetween: 250,
                },
              }
        }
        breakpointsBase="container"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default BaseSlider;

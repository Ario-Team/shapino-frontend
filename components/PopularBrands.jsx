import { SwiperSlide } from "swiper/react";
import BaseSlider from "./BaseSlider";
import PopularBrandsBox from "./PopularBrandsBox";

const PopularBrands = () => {
  return (
    <BaseSlider
      title={"محبوبترین برند ها"}
      className="mt-5"
      customBreakpoints={{
        1: {
          slidesPerView: 2,
          spaceBetween: 1,
          style: {
            overflowY: "visible",
          },
        },
        450: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        800: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
        },
        1700: {
          slidesPerView: 7,
        },
        2000: {
          slidesPerView: 8,
        },
      }}
    >
      <SwiperSlide>
        <PopularBrandsBox />
      </SwiperSlide>
      <SwiperSlide>
        <PopularBrandsBox />
      </SwiperSlide>
      <SwiperSlide>
        <PopularBrandsBox />
      </SwiperSlide>
      <SwiperSlide>
        <PopularBrandsBox />
      </SwiperSlide>
      <SwiperSlide>
        <PopularBrandsBox />
      </SwiperSlide>
      <SwiperSlide>
        <PopularBrandsBox />
      </SwiperSlide>
      <SwiperSlide>
        <PopularBrandsBox />
      </SwiperSlide>
      <SwiperSlide>
        <PopularBrandsBox />
      </SwiperSlide>
      <SwiperSlide>
        <PopularBrandsBox />
      </SwiperSlide>
      <SwiperSlide>
        <PopularBrandsBox />
      </SwiperSlide>
    </BaseSlider>
  );
};

export default PopularBrands;

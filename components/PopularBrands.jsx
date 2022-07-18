import { SwiperSlide } from "swiper/react";
import BaseSlider from "./BaseSlider";
import PopularBrandsBox from "./PopularBrandsBox";

const PopularBrands = () => {
  return (
    <BaseSlider
      title={"محبوبترین برند ها"}
      customBreakpoints={{
        371: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
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

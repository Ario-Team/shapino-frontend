import { SwiperSlide } from "swiper/react";
import BaseSlider from "./BaseSlider";
import PopularBrandsBox from "./PopularBrandsBox";

const PopularBrands = () => {
  return (
    <BaseSlider title={"محبوبترین برند ها"}>
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

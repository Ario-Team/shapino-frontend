import BaseSlider from "./BaseSlider";
import { SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";

const MostSellSlider = () => {
  return (
    <BaseSlider title="پرفروش ترین ها" className="mt-12">
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem />
      </SwiperSlide>
    </BaseSlider>
  );
};

export default MostSellSlider;

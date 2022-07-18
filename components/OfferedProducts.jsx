import { Swiper, SwiperSlide } from "swiper/react";
import CountdownCustom from "../components/CountdownCustom";
import ProductItem from "../components/ProductItem";

import "swiper/css";

const OfferedProducts = () => {
  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      <CountdownCustom />
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        className="mt-7 sm:mt-0 pt-5 lg:-mt-5"
        style={{
          width: "100%",
        }}
        breakpointsBase="container"
        breakpoints={{
          730: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1400: {
            slidesPerView: 4,
            centeredSlides: false,
          },
          1900: {
            slidesPerView: 5,
            centeredSlides: false,
          },
          2100: {
            slidesPerView: 6,
            centeredSlides: false,
          },
          2500: {
            slidesPerView: 7,
          },
          3000: {
            slidesPerView: 9,
          },
        }}
      >
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide style={{ width: "max-content" }}>
          <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OfferedProducts;

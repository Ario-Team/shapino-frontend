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
          500: {
            slidesPerView: 2,
            spaceBetween: 2,
            style: {
              overflowY: "visible",
            },
            centeredSlides: false,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 70,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 240,
          },
          1019: {
            slidesPerView: 4,
            spaceBetween: 220,
          },
          1243: {
            slidesPerView: 5,
            spaceBetween: 230,
          },
          1907: {
            slidesPerView: 6,
            spaceBetween: 240,
          },
          2064: {
            slidesPerView: 8,
            spaceBetween: 250,
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

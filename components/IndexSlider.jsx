import { Swiper, SwiperSlide } from "swiper/react";
import ExampleSlider from "./ExampleSlider";
import { Pagination } from "swiper";
import classes from "../styles/components/IndexSlider/index.module.scss";

import "swiper/css";
import "swiper/css/pagination";

const IndexSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        enabled: true,
        horizontalClass: `${classes.bullet_container}`,
        clickable: true,
      }}
      speed={1500}
      className={`${classes.slider} rounded-lg`}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <ExampleSlider />
      </SwiperSlide>
      <SwiperSlide>
        <ExampleSlider />
      </SwiperSlide>
      <SwiperSlide>
        <ExampleSlider />
      </SwiperSlide>
    </Swiper>
  );
};

export default IndexSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ExampleSlider from "../components/ExampleSlider";
import MainLayout from "../layouts/MainLayout";
import classes from "../styles/pages/index/index.module.scss";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <MainLayout>
      <div className="mb-5">
        <Swiper
          slidesPerView={1}
          pagination={{
            enabled: true,
            horizontalClass: `${classes.bullet_container}`,
          }}
          className={classes.slider}
          style={{
            overflowY: "visible !important",
          }}
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
      </div>
    </MainLayout>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ExampleSlider from "../components/ExampleSlider";
import MainLayout from "../layouts/MainLayout";
import classes from "../styles/pages/index/index.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>شاپیفای</title>
      </Head>
      <MainLayout>
        <div className="mb-5">
          <Menu />
          <Swiper
            slidesPerView={1}
            pagination={{
              enabled: true,
              horizontalClass: `${classes.bullet_container}`,
              clickable: true,
            }}
            speed={1500}
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
    </>
  );
}

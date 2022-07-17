import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ExampleSlider from "../components/ExampleSlider";
import MainLayout from "../layouts/MainLayout";
import classes from "../styles/pages/index/index.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";
import Menu from "../components/Menu";
import IconCategory from "../components/IconCategory";
import CountdownCustom from "../components/CountdownCustom";
import ProductItem from "../components/ProductItem";

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
          <IconCategory />
          <div className="flex flex-col gap-4 sm:flex-row">
            <CountdownCustom />
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              style={{
                width: "100%",
              }}
              centeredSlides
              breakpoints={{
                760: {
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
        </div>
      </MainLayout>
    </>
  );
}

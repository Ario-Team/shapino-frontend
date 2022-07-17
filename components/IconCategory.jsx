import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import bookSVG from "../public/svgs/book.svg";
import ballSVG from "../public/svgs/ball.svg";
import drillSVG from "../public/svgs/drill.svg";
import kidHeadSVG from "../public/svgs/kidHead.svg";
import laptopSVG from "../public/svgs/laptop.svg";
import perfumeSVG from "../public/svgs/perfume.svg";
import picnicGasSVG from "../public/svgs/picnicGas.svg";
import tshirtSVG from "../public/svgs/tshirt.svg";
import washinMachinSVG from "../public/svgs/washinMachin.svg";

import "swiper/css";

const IconCategory = () => {
  return (
    <div className="w-full mt-10 lg:px-10">
      <Swiper
        direction="horizontal"
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          750: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
          1201: {
            slidesPerView: 7,
          },
          1400: {
            slidesPerView: 9,
          },
        }}
      >
        <SwiperSlide>
          <SliderItem title="کالای دیجیتال" count={105} src={laptopSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem title="خودرو و ابزار" count={84} src={drillSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem title="مد و پوشاک" count={178} src={tshirtSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem title="اسباب بازی" count={201} src={kidHeadSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem title="زیبایی و سلامت" count={256} src={perfumeSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            title="خانه و آشپز خانه"
            count={236}
            src={washinMachinSVG}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem title="سوپر مارکت" count={42} src={picnicGasSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem title="ورزش و سلامت" count={87} src={ballSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem title="کتاب و لوازم تحریر" count={96} src={bookSVG} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const SliderItem = ({ title, src, count }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 cursor-pointer">
      <div className="group peer w-max flex flex-col items-center gap-3">
        <div className="bg-white w-max p-2 rounded-2xl transition-colors duration-300 border-2 border-transparent group-hover:border-blue-500">
          <div className="bg-gray-100 px-3.5 py-3 rounded-xl flex items-center justify-center">
            <Image src={src} width={50} height={45} />
          </div>
        </div>
        <span className="font-iran-yekan font-medium text-base">{title}</span>
      </div>
      <div className="opacity-0 transition-all duration-300 peer-hover:opacity-100">
        <span className="font-iran-yekan font-medium text-base text-blue-500 ">
          {count} کالا
        </span>
      </div>
    </div>
  );
};

export default IconCategory;

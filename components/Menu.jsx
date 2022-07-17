import menuData from "../fakeData/menu";
import { HiMenuAlt1, HiMenuAlt2, HiMenuAlt3, HiMenuAlt4 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "../styles/components/Menu/index.module.scss";

import "swiper/css";
import "swiper/css/pagination";

const Menu = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, []);
  return (
    <div className="bg-transparent mb-3">
      {width > 1024 ? (
        <ul className="flex flex-row items-center justify-center gap-6">
          {menuData.map((item, key) => {
            return <MenuItem key={key} name={item} />;
          })}
        </ul>
      ) : (
        <Swiper
          direction="horizontal"
          slidesPerView={2}
          centeredSlides={true}
          className="w-full"
          modules={[Pagination]}
          breakpoints={{
            450: {
              slidesPerView: 3,
            },
            750: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 5,
            },
          }}
        >
          {menuData.map((item, key) => {
            return (
              <SwiperSlide
                key={key}
                className="w-max flex flex-row gap-2 justify-center items-center"
              >
                {item == "دسته بندی" ? <HiMenuAlt1 /> : null}
                <span>{item}</span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

const MenuItem = ({ name }) => {
  const isCategory = name == "دسته بندی";
  return (
    <li
      className={`font-iran-yekan font-normal flex flex-row items-center gap-2 text-black transition-opacity duration-300 cursor-pointer opacity-80 hover:opacity-100 ${
        isCategory ? "hidden lg:flex" : " "
      }`}
    >
      {isCategory ? <HiMenuAlt1 className="rotate-180" /> : null}
      {name}
    </li>
  );
};
export default Menu;

import { SwiperSlide } from "swiper/react";
import BaseSlider from "./BaseSlider";
import BlogItem from "./BlogItem";

const BlogPostsSlider = () => {
  return (
    <BaseSlider
      title="وبلاگ مارکت"
      customStarterView={1}
      customBreakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 8,
          style: {
            overflow: "visible",
          },
        },
        670: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
        914: {
          spaceBetween: 5,
          slidesPerView: 4,
        },
        1200: {
          spaceBetween: 6,
          slidesPerView: 5,
        },
        1800: {
          spaceBetween: 7,
          slidesPerView: 6,
        },
      }}
    >
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
    </BaseSlider>
  );
};

export default BlogPostsSlider;

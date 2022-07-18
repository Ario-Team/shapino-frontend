import { SwiperSlide } from "swiper/react";
import BaseSlider from "./BaseSlider";
import BlogItem from "./BlogItem";

const BlogPostsSlider = () => {
  return (
    <BaseSlider
      title="وبلاگ مارکت"
      customStarterView={1}
      customBreakpoints={{
        670: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1800: {
          slidesPerView: 4,
        },
        2066: {
          slidesPerView: 5,
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

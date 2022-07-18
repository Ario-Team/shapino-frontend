import Image from "next/image";
import { FaEye } from "react-icons/fa";
import blogImage from "../public/images/blog.png";

const BlogItem = ({ src, title, date, view }) => {
  return (
    <section className="bg-white cursor-pointer flex flex-col items-center w-max px-5 py-5 drop-shadow-lg transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-[#FF6230]/30 hover:shadow-md">
      <div className="rounded-sm h-max w-max overflow-hidden">
        <Image src={src} width={280} height={160} alt={title} />
      </div>
      <h1 className="font-iran-yekan font-bold text-center mt-5 text-lg max-w-[80%]">
        {title}
      </h1>
      <div className="text-[#7C8DA6] font-iran-yekan text-base font-medium flex flex-row w-full justify-between mt-10">
        <span>{date}</span>
        <span className="flex flex-row items-center gap-2">
          <FaEye /> {view}
        </span>
      </div>
    </section>
  );
};

BlogItem.defaultProps = {
  src: blogImage,
  title: "راهنمای خرید کولر گازی برای تابستان",
  date: "8 خرداد 1401",
  view: 512,
};

export default BlogItem;

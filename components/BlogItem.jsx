import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import blogImage from "../public/images/blog.png";

const BlogItem = ({ src, title, date, view }) => {
  return (
    <Link href="/posts" passHref prefetch>
      <section className="bg-white cursor-pointer flex flex-col items-center w-full px-5 py-5 drop-shadow-lg transition-all duration-300 z-10 hover:scale-105 hover:shadow-[#FF6230]/30 hover:shadow-md hover:z-20">
        <div className="rounded-sm h-max w-full overflow-hidden">
          <Image
            src={src}
            width={280}
            height={160}
            alt={title}
            layout="responsive"
          />
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
    </Link>
  );
};

BlogItem.defaultProps = {
  src: blogImage,
  title: "راهنمای خرید کولر گازی برای تابستان",
  date: "8 خرداد 1401",
  view: 512,
};

export default BlogItem;

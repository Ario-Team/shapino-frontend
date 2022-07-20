import Image from "next/image";
import recentImage from "../../public/images/recentPost.png";

const RecentPostsItem = ({ src, title, date }) => {
  return (
    <div className="flex flex-row gap-7 items-center px-5 py-3 transition-colors duration-300 cursor-pointer hover:bg-gray-50">
      <div className="overflow-hidden rounded-md">
        <Image src={src} width={120} height={75} alt={title} />
      </div>
      <div className="flex flex-col font-iran-yekan font-normal">
        <span className="text-lg">{title}</span>
        <span className="text-base text-[#676D7C]">{date}</span>
      </div>
    </div>
  );
};

RecentPostsItem.defaultProps = {
  src: recentImage,
  title: "استعلام ثبت برند",
  date: "04 مرداد 1400",
};

export default RecentPostsItem;

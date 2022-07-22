import Image from "next/image";
import { FaEye } from "react-icons/fa";
import postboxImage from "../../public/images/postBox.png";

const PostBox = ({ title, description, date, view, src }) => {
  return (
    <div className="w-11/12 bg-white flex flex-col rounded-lg items-center mx-auto lg:flex-row lg:max-w-full lg:max-h-72 lg:items-center lg:mx-0 lg:py-6 lg:px-6">
      <div className="w-full overflow-hidden rounded-2xl lg:min-w-[280px] lg:max-w-[280px]">
        <Image
          src={src}
          width={280}
          height={160}
          alt={title}
          layout="responsive"
        />
      </div>
      <div className="w-full  flex flex-col gap-4 items-center font-iran-yekan text-center py-5 px-2 lg:items-start lg:text-right lg:mr-7 xxl:items-center">
        <span className="font-bold text-lg">{title}</span>
        <p className="font-normal text-base text-[#676D7C] lg:max-w-2xl">
          {description}
        </p>
        <div className="ml-5 flex flex-row items-center gap-10 self-end font-medium text-[#676D7C] text-base">
          <span>{date}</span>
          <span className="flex flex-row gap-2 items-center">
            <FaEye />
            {view}
          </span>
        </div>
      </div>
    </div>
  );
};

PostBox.defaultProps = {
  title: "رقابت فروشگاه های آنلاین بر سر فروش بیشتر",
  description:
    "برای استعلام برند قبل از ثبت چه در وب سایت ما و چه از طریق استعلام  برند سایت مالکیت معنوی باید حتما بدانید که حتی اگر در فرآیند استعلام علامت تجاری، اسم مشابهی پیدا نشد",
  date: "5 شهریور 1400",
  view: 320,
  src: postboxImage,
};

export default PostBox;

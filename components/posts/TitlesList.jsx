import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const TitlesList = () => {
  return (
    <div className="flex flex-col items-center py-8 px-12 bg-white w-max mx-auto rounded-lg h-max lg:mx-0">
      <span className="font-iran-yekan font-normal text-lg bg-[#707070]/5 px-16 py-3 opacity-80 transition-opacity duration-300 hover:opacity-100">
        فهرست عناوین مقاله
      </span>
      <span className="font-iran-yekan font-normal text-base text-[#3F8CFF] mt-6 border-[#3F8CFF] border-[1px] rounded px-6 py-0.5">
        5 دقیقه مدت مطالعه
      </span>
      <div className="mt-8 flex flex-col items-start w-full gap-6">
        <TitleItem title="استعلام ثبت برند" active />
        <TitleItem title="جستجوی علائم تجاری" />
        <TitleItem title="جستجوی علامت تجاری" />
        <TitleItem title="استعلام علامت تجاری" />
        <TitleItem title="استعلام برندهای ثبت شده در ایران" />
        <TitleItem title="استعلام ثبت برند" />
        <TitleItem title="جستجوی علائم تجاری" />
        <TitleItem title="جستجوی علامت تجاری" />
        <TitleItem title="استعلام علامت تجاری" />
        <TitleItem title="استعلام برندهای ثبت شده در ایران" />
      </div>
    </div>
  );
};

const TitleItem = ({ title, active }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <MdOutlineKeyboardArrowLeft
        className={`text-xl ${active ? "text-[#3F8CFF]" : "text-[#ABB9CF]"}`}
      />
      <span
        className={`text-[#676D7C] font-normal text0lg font-iran-yekan transition-all duration-300 hover:text-[#111111]`}
      >
        {title}
      </span>
    </div>
  );
};

export default TitlesList;

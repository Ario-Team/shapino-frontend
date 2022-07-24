import Image from "next/image";
import {
  FaEye,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import chatSVG from "../../public/svgs/chat.svg";
import postImage from "../../public/images/post.png";
import profileCommentImage from "../../public/images/profileComment.png";
import { BsArrowReturnLeft } from "react-icons/bs";

const BlogContent = () => {
  return (
    <div className="w-full">
      <div className="font-iran-yekan flex flex-row justify-between items-end">
        <div className="flex flex-col gap-2">
          <span className="font-normal text-base text-[#676D7C]">
            حوزه دیجیتال
          </span>
          <h1 className="font-bold text-2xl">خرید محصولات دیجیتال</h1>
        </div>
        <div className="text-[#7C8DA6] font-normal text-lg flex flex-row items-center gap-4">
          <span>8 خرداد 1401</span>
          <div className="flex flex-row gap-5 border-[1px] border-[#ABB9CF] px-6 py-0 rounded-md">
            <span className="flex flex-row gap-2 items-center">
              <FaEye className="" />
              452
            </span>
            <span className="flex flex-row gap-2 items-center">
              <Image src={chatSVG} width={20} height={20} alt="chat icon" />
              50
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 my-7">
        <p className="font-iran-yekan text-lg font-normal text-black leading-normal text-right">
          برای استعلام برند قبل از ثبت چه در وب سایت ما و چه از طریق استعلام
          برند سایت مالکیت معنوی باید حتما بدانید که حتی اگر در فرآیند استعلام
          علامت تجاری، اسم مشابهی پیدا نشد به معنی ثبت صد در صدی نام درخواستی
          شما نمی باشد اما به شما این اطمینان را می دهیم که تا حد زیادی سعی کرده
          ایم پاسخ هایی که به درخواست های شما می دهیم تا حد ود زیادی دقیق باشد.
          ما حالتهای مختلف مشابهت را برای شما بررسی می کنیم و این کار را هم
          رایگان انجام می دهیم. بعد از اعلام پاسخ استعلام، اگر تمایل داشتید می
          توانید فرآیند ثبت برند را به موسسه ما واگذار کنید که شامل هزینه می
          باشد
        </p>
        <Image src={postImage} width={200} height={500} alt="post image" />
        <p className="font-iran-yekan text-lg font-normal text-black leading-normal text-right">
          برای استعلام برند قبل از ثبت چه در وب سایت ما و چه از طریق استعلام
          برند سایت مالکیت معنوی باید حتما بدانید که حتی اگر در فرآیند استعلام
          علامت تجاری، اسم مشابهی پیدا نشد به معنی ثبت صد در صدی نام درخواستی
          شما نمی باشد اما به شما این اطمینان را می دهیم که تا حد زیادی سعی کرده
          ایم پاسخ هایی که به درخواست های شما می دهیم تا حد زیادی دقیق باشد. ما
          حالتهای مختلف مشابهت را برای شما بررسی می کنیم و این کار را هم رایگان
          انجام می دهیم. بعد از اعلام پاسخ استعلام، اگر تمایل داشتید می توانید
          فرآیند ثبت برند را به موسسه ما واگذار کنید که شامل هزینه می باشد
        </p>
        <ul className="list-disc text-[#3F8CFF] flex flex-col gap-6">
          <li>
            <span className="text-lg font-iran-yekan font-medium text-black">
              جستجوی علامت تجاری
            </span>
          </li>
          <li>
            <span className="text-lg font-iran-yekan font-medium text-black">
              استعلام علامت تجاری
            </span>
          </li>
          <li>
            <span className="text-lg font-iran-yekan font-medium text-black">
              استعلام برندهای ثبت شده در ایران
            </span>
          </li>
        </ul>
        <Image src={postImage} width={200} height={500} alt="post image" />
        <p className="font-iran-yekan text-lg font-normal text-black leading-normal text-right">
          برای استعلام برند قبل از ثبت چه در وب سایت ما و چه از طریق استعلام
          برند سایت مالکیت معنوی باید حتما بدانید که حتی اگر در فرآیند استعلام
          علامت تجاری، اسم مشابهی پیدا نشد به معنی ثبت صد در صدی نام درخواستی
          شما نمی باشد اما به شما این اطمینان را می دهیم که تا حد زیادی سعی کرده
          ایم{" "}
        </p>
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <span className="font-kalameh font-bold text-xl self-start">
          اشتراک گذاری مقاله
        </span>
        <div className="flex flex-row gap-4 border-[1px] border-[#ABB9CF] rounded-xl w-max py-2 px-16 items-center">
          <div className="border-[1px] transition-all duration-300 border-transparent hover:border-[#3F8CFF] rounded-md w-max p-1">
            <FaWhatsapp className="text-2xl text-[#676D7C] transition-all duration-300  hover:text-[#3F8CFF] hover:scale-105" />
          </div>
          <div className="border-[1px] transition-all duration-300 border-transparent hover:border-[#3F8CFF] rounded-md w-max p-1">
            <FaTelegramPlane className="text-2xl text-[#676D7C] transition-all duration-300  hover:text-[#3F8CFF] hover:scale-105" />
          </div>
          <div className="border-[1px] transition-all duration-300 border-transparent hover:border-[#3F8CFF] rounded-md w-max p-1">
            <FaInstagram className="text-2xl text-[#676D7C] transition-all duration-300  hover:text-[#3F8CFF] hover:scale-105" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-kalameh font-bold text-xl">پرسش و پاسخ</span>
        <span className="font-iran-yekan font-normal text-lg text-[#676D7C]">
          همین حالا درخواست رزو وقت خودتون رو ارسال کنید تا در اولین فرصت
          مشاوران ما با شما تماس بگیرند
        </span>
      </div>
      <div>
        <form
          action="#"
          className="grid grid-cols-1 font-iran-yekan font-normal text-base sm:grid-cols-2 bg-white rounded py-8 px-16 gap-y-10 gap-x-10"
        >
          <div className="flex flex-col gap-3">
            <label className="" htmlFor="">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              className="bg-[#F2F0F1]/95 outline-none w-full h-14 rounded-lg caret-[#3F8CFF] px-5"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="" htmlFor="">
              ایمیل
            </label>
            <input
              type="text"
              className="bg-[#F2F0F1]/95 outline-none w-full h-14 rounded-lg caret-[#3F8CFF] px-5"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label className="" htmlFor="content">
              پرسش
            </label>
            <textarea
              className="bg-[#F2F0F1]/95 w-full h-60 rounded-2xl px-4 py-3 outline-none caret-[#3F8CFF]"
              name="content"
              id="content"
            ></textarea>
          </div>
          <button className="bg-[#3F8CFF] py-3 place-self-end sm:col-span-2 drop-shadow-lg transition-all duration-300 px-10 text-white w-max rounded-md hover:scale-105">
            ارسال
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <span className="font-kalameh font-bold text-xl">نظرات کاربران</span>
        <span className="font-iran-yekan font-normal text-lg text-[#676D7C]">
          همین حالا درخواست رزو وقت خودتون رو ارسال کنید تا در اولین فرصت
          مشاوران ما با شما تماس بگیرند
        </span>
      </div>
      <div className="w-full bg-white py-3 my-10 rounded-lg">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  );
};

const CommentItem = () => {
  return (
    <div className="flex flex-row justify-between items-center px-10 py-7">
      <div className="flex flex-row items-center gap-4">
        <div>
          <Image
            src={profileCommentImage}
            width={75}
            height={75}
            alt="Profile iamge"
          />
        </div>
        <div className="flex flex-col gap-2 font-iran-yekan font-normal">
          <span className="text-base text-[#676D7C]">حامد فراهانی</span>
          <span className="text-lg">
            آیا بعد از کاشت مو باید مراقبت هایی سختی را در پیش بگیریم ؟
          </span>
          <span className="text-lg text-[#3F8CFF] w-max cursor-pointer">
            مشاهده 8 پاسخ
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center w-max font-iran-yekan font-normal text-[#676D7C]">
        <span className="text-base">04 مرداد 1400</span>
        <span className="flex flex-row gap-2 items-center text-lg">
          <BsArrowReturnLeft className="text-[#3F8CFF]" />
          پاسخ
        </span>
      </div>
    </div>
  );
};

export default BlogContent;

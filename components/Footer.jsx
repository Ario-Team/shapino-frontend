import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import deliverySVG from "../public/svgs/delivery.svg";
import guaranteeSVG from "../public/svgs/guarantee.svg";
import shieldSVG from "../public/svgs/shield.svg";
import supporterSVG from "../public/svgs/supporter.svg";
import truckSVG from "../public/svgs/truck.svg";
import enamadSVG from "../public/svgs/enamad.svg";
import enamadNewSVG from "../public/svgs/enamadNew.svg";
import samandehiSVG from "../public/svgs/samandehi.svg";

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-2xl h-max lg:rounded-t-xl">
      <div className="grid grid-cols-2 place-items-center gap-y-10 py-6 pt-14 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <IconBox src={deliverySVG} text="تحویل اکسپرس" />
        <IconBox src={supporterSVG} text="پشتیبانی 24 ساعته" />
        <IconBox src={truckSVG} text="تحویل سریع و آسان" />
        <IconBox src={guaranteeSVG} text="ضمانت اصالت کالا" />
        <IconBox
          className="col-span-2 sm:col-span-1 lg:col-span-4 xl:col-span-1"
          src={shieldSVG}
          text="تضمین بهترین قیمت"
        />
      </div>
      <div className="px-5 pb-5 grid grid-cols-1 place-items-center mt-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:place-items-start lg:mx-12">
        <List
          title="خرید"
          list={[
            "خرید لباس",
            "لباس مردانه",
            "لباس زنانه",
            "لباس بچه گانه",
            "خرید لوازم آرایشی",
          ]}
        />
        <List
          title="خدمات مشتریان"
          list={[
            "پرسش های متداول",
            "شرایط بازگشت",
            "راهنمای خرید",
            "فروش غیر حضوری",
          ]}
        />
        <List
          title="اطلاعات مارکت"
          list={[
            "درباره ما",
            "قوانین ما",
            "تماس با ما",
            "فرصت های شغلی",
            "همکاری تجاری",
          ]}
        />
        <div className="flex flex-col w-full">
          <span className="font-iran-yekan font-bold text-xl">
            شبکه های اجتماعی
          </span>
          <div className="flex flex-row-reverse gap-8 mt-6 justify-self-end">
            <FaTelegramPlane className="text-2xl text-black opacity-60 transition-[opacity, color] duration-200 cursor-pointer hover:opacity-100 hover:text-blue-500 focus:opacity-100" />
            <FaWhatsapp className="text-2xl text-black opacity-60 transition-[opacity, color] duration-200 cursor-pointer hover:opacity-100 hover:text-blue-500 focus:opacity-100" />
            <FaInstagram className="text-2xl text-black opacity-60 transition-[opacity, color] duration-200 cursor-pointer hover:opacity-100 hover:text-blue-500 focus:opacity-100" />
            <FaTwitter className="text-2xl text-black opacity-60 transition-[opacity, color] duration-200 cursor-pointer hover:opacity-100 hover:text-blue-500 focus:opacity-100" />
          </div>
          <div className="mt-8">
            <span className="font-iran-yekan font-bold text-xl">
              عضویت در خبرنامه
            </span>
            <div className="w-full relative mt-6">
              <input
                className="peer w-full outline-none bg-gray-100 py-4 rounded-xl font-iran-yekan font-normal text-base pr-6 border-transparent border-2 transition-colors duration-300 hover:border-gray-400 focus:border-gray-400"
                placeholder="ایمیل خود را وارد کنید"
              />
              <FiMail className="text-gray-300 absolute text-2xl left-4 top-4 transition-colors duration-300 peer-hover:text-gray-400 peer-focus:text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-5">
        <span className="font-iran-yekan text-lg text-center font-bold">
          فروشگاه اینترنتی آنلاین مارکت ، بررسی، انتخاب و خرید آنلاین
        </span>
        <p className="text-center px-2 mt-5 font-iran-yekan font-medium text-base sm:px-20 lg:max-w-7xl">
          آنلاین مارکت به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از
          یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، 7 روز ضمانت بازگشت
          کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌هایمعتبر جهان،
          به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به سایت
          دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و
          .به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد
          <span className="text-blue-400 mr-3 font-iran-yekan text-base cursor-pointer">
            بیشتر...
          </span>
        </p>
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-10 py-10">
        <Image
          src={samandehiSVG}
          width={86}
          height={100}
          alt="samandehi logo"
        />
        <Image
          src={enamadNewSVG}
          width={85}
          height={100}
          alt="enamad new logo"
        />
        <Image src={enamadSVG} width={85} height={100} alt="enamad logo" />
      </div>
    </footer>
  );
};

const IconBox = ({ src, text, className }) => {
  return (
    <div className={`flex flex-col items-center w-max gap-3 ${className}`}>
      <div className="w-14">
        <Image
          layout="responsive"
          src={src}
          width={60}
          height={80}
          alt="Icon Box"
        />
      </div>
      <span className="font-iran-yekan font-bold text-lg">{text}</span>
    </div>
  );
};

const List = ({ title, list }) => {
  return (
    <div>
      <span className="font-iran-yekan font-bold text-xl">{title}</span>
      <ul className="mt-5 flex flex-col gap-2">
        {list.map((item, key) => {
          return (
            <li
              key={key}
              className="font-iran-yekan font-medium text-black opacity-70 transition-opacity duration-300 cursor-pointer hover:opacity-100"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;

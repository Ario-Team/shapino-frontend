import Head from "next/head";
import Image from "next/image";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import productImage from "../public/images/product.png";
import qrcodeImage from "../public/images/qrcode.png";
import xiaomiLogoImage from "../public/images/xiaomiLogo.png";
import bellSVG from "../public/svgs/bell.svg";
import calendarSVG from "../public/svgs/calendar.svg";
import tikSVG from "../public/svgs/tik.svg";
import productTruckSVG from "../public/svgs/productTruck.svg";
import downloadSVG from "../public/svgs/download.svg";
import flagSVG from "../public/svgs/flag.svg";
import { AiFillBell, AiFillHeart, AiOutlineFacebook } from "react-icons/ai";
import { FaStar, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import ProductItem from "../components/ProductItem";
import PathNav from "../components/PathNav";
import Tik from "../components/tik";

const product = () => {
  return (
    <MainLayout>
      <PathNav
        path={[
          "دیجی مارکت",
          "صفحه محصول",
          "کالای دیجیتال",
          "موبایل شیائومی ردمی نوت",
        ]}
      />
      <Head>
        <title>شاپینو | موبایل شیائومی ردمی نوت 11 پرو پلاس WX400</title>
      </Head>
      <div className="flex flex-col gap-10 my-5 items-center">
        <div className="w-full flex flex-col items-center  gap-4 lg:items-start lg:flex-row">
          <div className="flex flex-col items-center w-full max-w-md">
            <div className="flex flex-col rounded-lg bg-white w-11/12 items-center py-16 gap-3 sm:w-full">
              <div>
                <Image
                  src={productImage}
                  width={200}
                  height={200}
                  alt={"product image"}
                />
              </div>
              <hr className="bg-[#7C8DA6]/25 w-8/12 mt-4 mb-1" />
              <div className="w-full relative flex flex-row justify-center gap-4">
                <AiFillHeart className="text-[#7C8DA6]/50 cursor-pointer transition-colors duration-300 text-2xl hover:text-[#3F8CFF] focus:text-[#3F8CFF]" />
                <FaTelegramPlane className="peer text-[#7C8DA6]/50 cursor-pointer transition-colors duration-300 text-2xl hover:text-[#3F8CFF] focus:text-[#3F8CFF]" />
                <AiFillBell className="text-[#7C8DA6]/50 cursor-pointer transition-colors duration-300 text-2xl hover:text-[#3F8CFF] focus:text-[#3F8CFF]" />
                <div className="absolute bottom-6 font-iran-yekan font-normal text-sm bg-white/60 rounded-md border-[#ABB9CF] border-[1px] py-3 px-4 hidden flex-col gap-3 opacity-0 transition-opacity duration-300 focus:opacity-100 hover:opacity-100  focus:flex hover:flex peer-focus:flex peer-hover:flex peer-focus:opacity-100 peer-hover:opacity-100 ">
                  <div className="cursor-pointer max-w-[170px] min-w-[170px] flex flex-row-reverse gap-3 drop-shadow-md items-center px-10 py-2.5 rounded-lg bg-[#3F8CFF] text-white w-max transition-transform hover:scale-105">
                    <FaTelegramPlane className="text-white text-lg" /> تلگرام
                  </div>
                  <div className="cursor-pointer max-w-[170px] min-w-[170px] flex flex-row-reverse gap-3 drop-shadow-md items-center px-10 py-2.5 rounded-lg bg-[#20B854] text-white w-max transition-transform hover:scale-105">
                    <FaWhatsapp className="text-white text-lg" /> واتساپ
                  </div>
                  <div className="cursor-pointer max-w-[170px] min-w-[170px] flex flex-row-reverse gap-3 drop-shadow-md items-center px-10 py-2.5 rounded-lg bg-[#0649AE] text-white w-max transition-transform hover:scale-105">
                    <AiOutlineFacebook className="text-white text-lg" /> فیسبوک
                  </div>
                  <div className="cursor-pointer max-w-[170px] min-w-[170px] flex flex-row-reverse gap-3 drop-shadow-md items-center px-10 py-2.5 rounded-lg bg-[#3F8CFF] text-white w-max transition-transform hover:scale-105">
                    <IoCopyOutline className="text-white text-lg" /> کپی لینک
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row my-5  justify-between w-full">
              <div className="bg-white flex flex-row items-center justify-center cursor-pointer transition-transform duration-200 px-4 py-3 rounded-sm hover:scale-105">
                <Image
                  src={productImage}
                  width={40}
                  height={40}
                  alt={"thumb"}
                />
              </div>
              <div className="bg-white flex flex-row items-center justify-center cursor-pointer transition-transform duration-200 px-4 py-3 rounded-sm hover:scale-105">
                <Image
                  src={productImage}
                  width={40}
                  height={40}
                  alt={"thumb"}
                />
              </div>
              <div className="bg-white flex flex-row items-center justify-center cursor-pointer transition-transform duration-200 px-4 py-3 rounded-sm hover:scale-105">
                <Image
                  src={productImage}
                  width={40}
                  height={40}
                  alt={"thumb"}
                />
              </div>
              <div className="bg-white flex flex-row font-iran-yekan font-medium text-lg items-center justify-center cursor-pointer transition-transform duration-200 px-5 py-3 rounded-sm hover:scale-105">
                3+
              </div>
            </div>
            <div className="bg-white w-11/12 sm:w-full flex flex-row justify-between items-center py-6 px-6 rounded-xl gap-8">
              <div className="flex flex-col gap-3 font-iran-yekan">
                <div className="flex flex-row gap-6">
                  <span className="text-[#7C8DA6] font-normal text-sm">
                    شناسه محصول :
                  </span>
                  <span className="font-medium text-lg">3694691DKP</span>
                </div>
                <div className="flex flex-row gap-6">
                  <span className="text-[#7C8DA6] font-normal text-sm">
                    شناسه گمرک :
                  </span>
                  <span className="font-medium text-lg">3694691DKP</span>
                </div>
              </div>
              <div>
                <Image
                  src={qrcodeImage}
                  width={50}
                  height={50}
                  alt="Product qrcode"
                />
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-4 w-full py-6 px-6 rounded-xl max-w-3xl md:w-full md:col-span-3 md:px-6 md:py-10 lg:col-span-6 lg:px-10">
            <div className="flex flex-col items-center text-center gap-2 font-iran-yekan font-bold lg:flex-row lg:justify-between">
              <h1 className="text-xl">
                موبایل شیائومی ردمی نوت 11 پرو پلاس WX400
              </h1>
              <span className="flex flex-row gap-2 items-center text-lg">
                <FaStar className="text-[#FFB217]" /> 5
              </span>
            </div>
            <div>
              <span className="font-iran-yekan font-normal text-base text-[#676D7C]">
                Asus Laptob WX400 model 256GB RAM And HDD 1000 GB
              </span>
            </div>
            <div className="flex flex-row w-full justify-between mb-4 font-iran-yekan font-normal">
              <div className="flex flex-row gap-5">
                <span className="text-sm text-[#7C8DA6]">برند : </span>
                <span className="text-base text-[#3F8CFF] cursor-pointer transition-transform duration-300 hover:scale-105">
                  Asus
                </span>
              </div>
              <div className="flex flex-row gap-5">
                <span className="text-sm text-[#7C8DA6]">دسته بندی : </span>
                <span className="text-base text-[#3F8CFF] cursor-pointer transition-transform duration-300 hover:scale-105">
                  لب تاپ
                </span>
              </div>
              <div className="flex flex-row gap-5">
                <span className="text-sm text-[#7C8DA6]">
                  پیشنهاد خرید کاربران :
                </span>
                <span className="text-base text-[#3F8CFF] cursor-pointer transition-transform duration-300 hover:scale-105">
                  40%
                </span>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-7">
              <div className="flex flex-row gap-4 items-center">
                <span className="font-iran-yekan font-normal text-sm text-[#7C8DA6]">
                  رنگ :
                </span>
                <div className="grid grid-cols-4 place-items-center mx-auto lg:grid-cols-5 gap-3 w-max lg:mx-0">
                  <div className="w-max flex flex-row items-center gap-3">
                    <div className="peer">
                      <div className="bg-[#F6BF1F] drop-shadow-md cursor-pointer w-5 h-5 rounded-full transition-transform duration-300 hover:scale-105"></div>
                    </div>
                    <span className="font-iran-yekan font-normal text-base invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all duration-300">
                      طلایی
                    </span>
                  </div>
                  <div className="w-max flex flex-row items-center gap-3">
                    <div className="peer">
                      <div className="bg-[#00B59C] drop-shadow-md cursor-pointer w-5 h-5 rounded-full transition-transform duration-300 hover:scale-105"></div>
                    </div>
                    <span className="font-iran-yekan font-normal text-base invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all duration-300">
                      سبز
                    </span>
                  </div>
                  <div className="w-max flex flex-row items-center gap-3">
                    <div className="peer">
                      <div className="bg-black drop-shadow-md cursor-pointer w-5 h-5 rounded-full transition-transform duration-300 hover:scale-105"></div>
                    </div>
                    <span className="font-iran-yekan font-normal text-base invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all duration-300">
                      مشکی
                    </span>
                  </div>
                  <div className="w-max flex flex-row items-center gap-3">
                    <div className="peer">
                      <div className="bg-white drop-shadow-md cursor-pointer w-5 h-5 rounded-full transition-transform duration-300 hover:scale-105"></div>
                    </div>
                    <span className="font-iran-yekan font-normal text-base invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all duration-300">
                      سفید
                    </span>
                  </div>
                  <div className="w-max flex flex-row items-center gap-3">
                    <div className="peer">
                      <div className="bg-[#8B93AB] drop-shadow-md cursor-pointer w-5 h-5 rounded-full transition-transform duration-300 hover:scale-105"></div>
                    </div>
                    <span className="font-iran-yekan font-normal text-base invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all duration-300">
                      طوسی
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 font-iran-yekan font-normal">
                <span className="text-sm text-[#7C8DA6]">حافظه داخلی : </span>
                <div className="flex flex-row gap-4">
                  <span className="text-base cursor-pointer border-transparent border-[1px] px-2 py-1 transition-all duration-300 hover:rounded-md  hover:border-[#3F8CFF]">
                    16
                  </span>
                  <span className="text-base cursor-pointer border-transparent border-[1px] px-2 py-1 transition-all duration-300 hover:rounded-md  hover:border-[#3F8CFF]">
                    256
                  </span>
                  <span className="text-base cursor-pointer border-transparent border-[1px] px-2 py-1 transition-all duration-300 hover:rounded-md  hover:border-[#3F8CFF]">
                    64
                  </span>
                  <span className="text-base cursor-pointer border-transparent border-[1px] px-2 py-1 transition-all duration-300 hover:rounded-md  hover:border-[#3F8CFF]">
                    128
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-sm font-iran-yekan font-normal ">
                <span className="text-[#7C8DA6]">ویژگی های محصولات :</span>
                <div className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-4">
                    <li>ویژگی اول این محصول</li>
                    <li>ویژگی دوم این محصول</li>
                  </ul>
                  <span className="text-[#55A3FE] cursor-pointer">
                    توضیحات بیشتر
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-5 font-iran-yekan font-normal text-[#676D7C] bg-[#F9F9F9] border-[1px] border-[#7C8DA6] rounded-lg px-8 py-5">
                <div className="flex flex-row gap-4 items-center">
                  <Image src={bellSVG} width={15} height={15} alt="bell" />
                  <span>هشدار سامانه همتا : </span>
                </div>
                <p className="w-full">
                  لورم ایپسوم متن ساختگی و بدون مفهوم که با استفاده از طراحان
                  گرافیک مورد استفاده قرار گرفته و هیچ معنی و مفهوم خاصی را
                  دنبال نمی کند لورم ایپسوم متن ساختگی و بدون مفهوم که با
                  استفاده از طراحان گرافیک
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-11/12 max-w-xs gap-6 sm:w-full ">
            <div className="bg-white w-full flex flex-col rounded-md gap-3 py-7 px-6">
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <Image
                    src={xiaomiLogoImage}
                    width={50}
                    height={35}
                    alt="Xiaomi Logo"
                  />
                </div>
                <span className="font-iran-yekan font-medium text-lg">
                  شیائومی
                </span>
              </div>
              <div className="flex flex-row justify-between font-iran-yekan font-normal text-base">
                <div className="flex flex-row gap-3 items-center">
                  <span className="text-[#3F8CFF]">10</span>
                  <span className="text-[#676D7C]">دیدگاه کاربران</span>
                </div>
                <div className="w-[1.5px] bg-[#7C8DA6] h-fll"></div>
                <div className="flex flex-row gap-3 items-center">
                  <span className="text-[#3F8CFF]">2</span>
                  <span className="text-[#676D7C]">پرسش و پاسخ</span>
                </div>
              </div>
            </div>
            <div className="w-full bg-white px-4 py-5 rounded-md flex flex-col gap-4">
              <div className="font-iran-yekan font-normal text-base px-4 flex flex-col gap-3">
                <div className="flex flex-row justify-between w-full items-center ">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="w-max h-max">
                      <Image
                        src={calendarSVG}
                        width={24}
                        height={24}
                        alt="calendar SVG"
                      />
                    </div>
                    <span>تاریخ بروز رسانی :</span>
                  </div>
                  <span>17 تیر 1401</span>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-max h-max">
                    <Image src={tikSVG} width={24} height={24} alt="tik SVG" />
                  </div>
                  <span>موجود است</span>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div>
                    <Image
                      src={productTruckSVG}
                      width={24}
                      height={24}
                      alt="Product Truck SVG"
                    />
                  </div>
                  <span>ارسال از 3 روز کاری آینده</span>
                </div>
              </div>
              <hr />
              <div className="w-full px-4 flex flex-col items-end gap-5 font-iran-yekan text-base">
                <div className="flex flex-row items-center gap-6 font-medium">
                  <span className="bg-red-600 text-white px-2 py-[1px] rounded-sm">
                    15 %
                  </span>
                  <div className="text-red-600 line-through">
                    <span className="text-[#676D7C]">250.000 تومان</span>
                  </div>
                </div>
                <span className="font-bold text-2xl">185.000 تومان</span>
                <button className="bg-[#3F8CFF] mt-4 w-10/12 self-center py-2.5 text-white rounded drop-shadow-lg transition-all duration-300 hover:scale-105 focus:scale-105">
                  افزودن به سبد خرید
                </button>
                <div className="flex flex-row gap-4 self-center my-5 items-center opacity-95 cursor-pointer transition-all duration-300 hover:opacity-100">
                  <div>
                    <Image src={flagSVG} width={20} height={20} alt="flag" />
                  </div>
                  <span className="font-iran-yekan font-normal text-sm">
                    گزارش قیمت بهتر برای این محصول
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 sm:w-full mt-7">
          <div className="w-full flex flex-row justify-between items-center">
            <span className="font-kalameh font-bold text-xl">
              محصولات پیشنهادی
            </span>
            <span className="font-iran-yekan font-medium text-base cursor-pointer text-[#3F8CFF] transition-all duration-300 hover:drop-shadow-md">
              مشاهده همه
            </span>
          </div>
          <div className="relative flex flex-col xl:flex-row items-center mt-6 sm:gap-1">
            <div className="flex flex-col h-max items-center gap-5 w-full sm:flex-row sm:gap-1 sm:w-max sm:mb-5 xl:mb-0">
              <div className="w-max">
                <ProductItem />
              </div>
              <div className="w-max">
                <ProductItem />
              </div>
            </div>
            <div className="bg-white min-h-[362px] h-max w-full w-min-max px-11 py-7 flex flex-col">
              <div className="font-iran-yekan w-full flex flex-col items-start gap-4 mt-8">
                <div className=" flex flex-row gap-7">
                  <div className="flex flex-row gap-3">
                    <div>
                      <Tik checked />
                    </div>
                    <span className="text-[#676D7C] text-base">
                      این محصول :
                    </span>
                  </div>
                  <span className="font-medium text-lg">
                    موبایل شیائومی ردمی نوت 11 پرو پلاس WX400
                  </span>
                  <span className="font-medium text-lg text-[#3F8CFF]">
                    250.000 تومان
                  </span>
                </div>
                <div className=" flex flex-row gap-7">
                  <div className="flex flex-row gap-3">
                    <div>
                      <Tik />
                    </div>
                    <span className="text-[#676D7C] text-base">
                      محصول پیشنهادی :
                    </span>
                  </div>
                  <span className="font-medium text-lg">
                    هنذفری شیائومی ردمی نوت پرو پلاس
                  </span>
                  <span className="font-medium text-lg text-[#3F8CFF]">
                    50.000 تومان
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex flex-col w-full items-end mt-5 gap-5">
                <div className="font-iran-yekan font-medium text-sm flex flex-row gap-4 items-center">
                  <div className="text-white px-1 py-0.5 bg-red-600 w-max rounded">
                    15 %
                  </div>
                  <div className="text-red-600 line-through">
                    <span className="text-[#676D7C]">250.000 تومان</span>
                  </div>
                </div>
                <div className="font-iran-yekan flex flex-row items-center gap-3">
                  <span className="font-normal text-base text-[#676D7C]">
                    (برای یک مورد)
                  </span>
                  <span className="font-bold text-2xl">185.000 تومان</span>
                </div>
                <button className="bg-[#3F8CFF] font-iran-yekan font-normal text-base mt-4 w-4/12 py-2.5 text-white rounded drop-shadow-lg transition-all max-w-xs duration-300 hover:scale-105 focus:scale-105">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-7 flex flex-col gap-10 rounded px-8 w-11/12 sm:w-full">
          <div className="flex flex-row gap-8 w-full overflow-x-hidden py-5 border-b-[1px] border-[#8A86A1] text-[#676D7C] font-iran-yekan font-normal text-base">
            <span className="px-4 flex flex-row justify-center">
              نقد و بررسی
            </span>
            <span className="text-black relative px-4 flex flex-row justify-center">
              <div className="w-full h-[1px] bg-[#3F8CFF] absolute -bottom-5"></div>
              مشخصات
            </span>
            <span className="px-4 flex flex-row justify-center">
              دیدگاه کاربران
            </span>
            <span className="px-4 flex flex-row justify-center">
              پرسش و پاسخ
            </span>
          </div>
          <div className="bg-[#F9F9F9] flex flex-row justify-between border-[1px] border-[#ABB9CF] font-iran-yekan rounded w-full px-11 py-5">
            <div className="flex flex-row gap-5 items-center font-normal">
              <IoCopyOutline className="text-2xl text-[#3F8CFF]" />
              <span className="text-lg">دانلود کاتالوگ محصول</span>
              <span className="text-sm text-[#676D7C]">2.8 مگابایت حجم</span>
            </div>
            <div className="flex flex-row gap-3 items-center cursor-pointer">
              <span className="font-normal text-base text-[#20B854]">
                دانلود
              </span>
              <Image
                src={downloadSVG}
                width={24}
                height={24}
                alt="Download icon"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 overflow-x-hidden gap-x-8 w-full">
            <div className="col-span-4 flex flex-col gap-4">
              <PropertiesItem text="جنس" />
              <PropertiesItem text="ویژگی ظاهری" />
              <PropertiesItem text="سایر توضیحات" />
            </div>
            <div className="col-span-8 flex flex-col gap-4">
              <PropertiesItem text="تمام نخ طبیعی" />
              <PropertiesItem text="بسیار نرم و لطیف" />
              <PropertiesItem text="بدون آستین" />
              <PropertiesItem text="خنک مناسب تابستان" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const PropertiesItem = ({ text, className }) => {
  return (
    <div
      className={`font-iran-yekan font-normal px-6 py-3 text-base bg-[#F2F0F1] transition-all duration-300 border-transparent border-[1px] rounded-lg hover:border-[#3F8CFF] ${className}`}
    >
      {text}
    </div>
  );
};

export default product;

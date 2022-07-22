import Head from "next/head";
import Image from "next/image";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import productImage from "../public/images/product.png";
import qrcodeImage from "../public/images/qrcode.png";
import { AiFillBell, AiFillHeart, AiOutlineFacebook } from "react-icons/ai";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

const product = () => {
  return (
    <MainLayout>
      <Head>
        <title>شاپینو | موبایل شیائومی ردمی نوت 11 پرو پلاس WX400</title>
      </Head>
      <div className="flex flex-col my-5 items-center">
        <div className="grid grid-cols-1 place-items-center w-max">
          <div className="flex flex-col rounded-lg bg-white w-11/12 items-center py-5 gap-3 sm:w-full">
            <div>
              <Image
                src={productImage}
                width={200}
                height={200}
                alt={"product image"}
              />
            </div>
            <hr className="bg-[#7C8DA6]/25 w-8/12" />
            <div className="w-full relative flex flex-row justify-center gap-4">
              <AiFillHeart className="text-[#7C8DA6]/50 cursor-pointer transition-colors duration-300 text-2xl hover:text-[#3F8CFF] focus:text-[#3F8CFF]" />
              <FaTelegramPlane className="peer text-[#7C8DA6]/50 cursor-pointer transition-colors duration-300 text-2xl hover:text-[#3F8CFF] focus:text-[#3F8CFF]" />
              <AiFillBell className="text-[#7C8DA6]/50 cursor-pointer transition-colors duration-300 text-2xl hover:text-[#3F8CFF] focus:text-[#3F8CFF]" />
              <div className="absolute bottom-6 font-iran-yekan font-normal text-sm bg-white/60 rounded-md border-[#ABB9CF] border-[1px] py-3 px-4 flex flex-col gap-3 opacity-0 transition-opacity duration-300  focus:opacity-100 hover:opacity-100 peer-focus:opacity-100 peer-hover:opacity-100 ">
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
          <div className="flex flex-row my-5 gap-4 w-11/12 lg:w-full">
            <div className="bg-white flex flex-row items-center justify-center cursor-pointer transition-transform duration-200 px-4 py-3 rounded-sm hover:scale-105">
              <Image src={productImage} width={40} height={40} alt={"thumb"} />
            </div>
            <div className="bg-white flex flex-row items-center justify-center cursor-pointer transition-transform duration-200 px-4 py-3 rounded-sm hover:scale-105">
              <Image src={productImage} width={40} height={40} alt={"thumb"} />
            </div>
            <div className="bg-white flex flex-row items-center justify-center cursor-pointer transition-transform duration-200 px-4 py-3 rounded-sm hover:scale-105">
              <Image src={productImage} width={40} height={40} alt={"thumb"} />
            </div>
            <div className="bg-white flex flex-row font-iran-yekan font-medium text-lg items-center justify-center cursor-pointer transition-transform duration-200 px-5 py-3 rounded-sm hover:scale-105">
              3+
            </div>
          </div>
          <div className="bg-white w-max flex flex-row justify-between items-center py-6 px-6 rounded-xl gap-8">
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
        <div></div>
        <div></div>
      </div>
    </MainLayout>
  );
};

export default product;

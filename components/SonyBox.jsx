import BrandsBox from "./BrandsBox";
import { RiArrowLeftSLine } from "react-icons/ri";
import Image from "next/image";
import sonyDevicesSVG from "../public/svgs/sonyDevices.svg";

const SonyBox = () => {
  return (
    <BrandsBox
      backgroundColor={"bg-[#ABB9CF]"}
      className="w-11/12 h-52 flex flex-col items-center justify-center text-center relative mb-5 lg:mb-0 md:overflow-hidden lg:w-5/12 lg:items-start lg:pr-10 2xl:overflow-visible 2xl:w-6/12"
    >
      <div className="flex flex-col z-10">
        <div className="flex flex-row gap-3 font-kalameh font-bold text-2xl md:text-3xl">
          <span className="ml-3">محصولات سونی</span>
          <span className="text-white uppercase">Sony</span>
        </div>
        <div className="flex flex-row w-max cursor-pointer self-center mt-5 items-center transition-all duration-300 hover:shadow-md">
          <span className="font-iran-yekan font-medium text-sm bg-white px-3 py-1 rounded-r-md md:text-base">
            دیدن همه
          </span>
          <div className="bg-black p-1.5 rounded-l-md md:p-2">
            <RiArrowLeftSLine className="text-white" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:-z-0 lg:left-0 lg:top-4 2xl:-top-7">
        <Image
          src={sonyDevicesSVG}
          width={334}
          height={226}
          alt="Sony devices"
        />
      </div>
    </BrandsBox>
  );
};

export default SonyBox;

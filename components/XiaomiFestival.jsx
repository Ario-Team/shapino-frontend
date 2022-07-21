import Image from "next/image";
import { RiArrowLeftSLine } from "react-icons/ri";
import headsetImage from "../public/images/devices/headset.png";
import powerbankImage from "../public/images/devices/powerbank.png";

const XiaomiFestival = () => {
  return (
    <div className="bg-[#FF6900] flex justify-around px-24 rounded-lg w-11/12 py-14 mx-auto lg:w-full">
      <div className="grid lg:grid-cols-4 place-conent-center place-items-center ">
        <div className="font-kalameh font-bold w-full flex flex-col gap-6 items-center justify-center lg:col-span-4 lg:flex-row lg:w-max">
          <div className="flex flex-row font-extrabold items-center w-max lg:gap-5 lg:flex-col">
            <span className="text-6xl text-white lg:text-6xl 2xl:text-7xl">
              %22
            </span>
            <span className="text-5xl mr-5 lg:-mt-2 lg:text-5xl 2xl:text-6xl">
              تخفیف
            </span>
          </div>
          <span className="text-3xl text-center font-extrabold lg:text-4xl">
            جشنواره 2021 شیائومی در ایران
          </span>
        </div>
        <div className="col-span-2 hidden lg:block"></div>
        <div className="w-full flex flex-col items-center mt-5 lg:col-span-2 lg:place-self-end lg:flex-row lg:w-max lg:gap-12 lg:self-end">
          <div className="font-iran-yekan text-white font-medium text-lg lg:text-xl">
            محصولات دیجیتال شیائومی
          </div>
          <div className="flex flex-row w-max cursor-pointer mt-5 items-center transition-all duration-300 hover:shadow-md lg:mt-0">
            <span className="font-iran-yekan font-medium text-sm bg-white px-3 py-1 rounded-r-md md:text-base">
              دیدن همه
            </span>
            <div className="bg-black p-1.5 rounded-l-md md:p-2">
              <RiArrowLeftSLine className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-row">
        <div>
          <Image src={powerbankImage} width={220} height={220} alt="headset" />
        </div>
        <div>
          <Image src={headsetImage} width={220} height={220} alt="headset" />
        </div>
      </div>
    </div>
  );
};

export default XiaomiFestival;

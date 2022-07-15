import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import manSVG from "../public/svgs/man.svg";
import dotsSVG from "../public/svgs/dots.svg";

const ExampleSlider = () => {
  return (
    <div className="w-full relative h-72 flex flex-row items-end justify-center lg:h-[400px] overflow-auto">
      <div className="w-full h-full absolute grid grid-cols-2">
        <div className="bg-white hidden lg:flex flex-col items-center justify-center px-32">
          <div className="w-full flex flex-row justify-between">
            <div>
              <Image src={dotsSVG} width={35} height={35} alt="dots" />
            </div>
            <div>
              <ul className="flex flex-col items-end">
                <li className="font-kalameh font-normal text-2xl">shoes</li>
                <li className="font-kalameh font-normal text-2xl">shirt</li>
                <li className="font-kalameh font-normal text-2xl">t shirt</li>
                <li className="font-kalameh font-normal text-2xl">hate</li>
                <li className="font-kalameh font-normal text-2xl">hand</li>
              </ul>
            </div>
          </div>
          <div className="self-end mt-10">
            <span className="font-kalameh font-black text-5xl">adidas</span>
          </div>
        </div>
        <div className="bg-[#C47A1B] col-span-2 flex flex-col items-center justify-center gap-5 lg:col-span-1">
          <hr className="bg-white my-2 h-[2px] w-1/2" />
          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
            <div>
              <div className="relative text-center w-max mx-auto">
                <span className="font-kalameh font-bold text-5xl">50%</span>
                <span className="font-kalameh font-normal text-5xl absolute -right-14 top-0.5">
                  off
                </span>
              </div>
              <div>
                <span className="font-kalameh font-black text-4xl lg:text-3xl">
                  فروش ویژه برند آدیداس
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center lg:self-end">
              <span className="bg-white text-xl font-iran-yekan font-medium px-4 py-1 rounded-r-md">
                خرید
              </span>
              <div className="bg-black px-1 rounded-l-md">
                <FiArrowLeft className=" text-white text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative pt-60">
        <div className="">
          <Image src={manSVG} width={213} height={400} alt="Man picture" />
        </div>
      </div>
    </div>
  );
};

export default ExampleSlider;

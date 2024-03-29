import Image from "next/image";
import Countdown from "react-countdown";
import counterClockSVG from "../public/svgs/counterClock.svg";
import { RiArrowLeftSLine } from "react-icons/ri";

const CountdownCustom = () => {
  return (
    <div className="flex flex-col w-11/12 mx-auto h-[22.5rem] justify-between relative bg-[#F2F0F1] px-7 py-10 sm:w-max">
      <div className="relative flex self-center">
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 px-3">
            <Countdown
              date={Date.now() + 10000000}
              renderer={({ hours, minutes, seconds }) => {
                return (
                  <div className="font-kalameh font-bold text-2xl text-black">
                    {hours}:{minutes}:{seconds}
                  </div>
                );
              }}
            />
          </div>
          <div>
            <Image
              src={counterClockSVG}
              width={36}
              height={36}
              alt="Counter Clock SVG"
            />
          </div>
        </div>
      </div>
      <span className="self-center w-max top-28 -right-3.5 font-kalameh font-bold text-3xl text-[#FF6230] my-10">
        تخفیفات ویژه
      </span>
      <div className="w-max flex flex-row opacity-90 self-center transition-opacity duration-300 cursor-pointer shadow-sm hover:opacity-100">
        <span className="flex items-center justify-center font-iran-yekan font-medium text-sm bg-[#F9F9F9] px-2 py-2 text-black rounded-r-lg">
          مشاهده همه
        </span>
        <div className="flex justify-center items-center bg-black px-1 rounded-l-lg">
          <RiArrowLeftSLine className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default CountdownCustom;

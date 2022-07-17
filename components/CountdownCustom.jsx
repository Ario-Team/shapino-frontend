import Image from "next/image";
import Countdown from "react-countdown";
import counterClockSVG from "../public/svgs/counterClock.svg";
import { RiArrowLeftSLine } from "react-icons/ri";

const CountdownCustom = () => {
  return (
    <div className="flex flex-col h-72 justify-between relative bg-[#F2F0F1] w-max px-7 py-10">
      <div className="relative flex self-center">
        <div className="flex items-center gap-2">
          <div className="w-[4.3rem] h-4 bg-orange-500"></div>
          <div>
            <Image src={counterClockSVG} width={24} height={24} />
          </div>
        </div>
        <div className="absolute -right-5">
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
      </div>
      <span className="absolute w-max top-20 -right-3.5 font-kalameh font-bold text-3xl text-[#FF6230] my-10">
        تخفیفات ویژه
      </span>
      <div className="flex flex-row opacity-90 self-center transition-opacity duration-300 cursor-pointer shadow-sm hover:opacity-100">
        <span className="flex items-center justify-center font-iran-yekan font-medium text-sm bg-[#F9F9F9] px-1 py-2 text-black rounded-r-lg">
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

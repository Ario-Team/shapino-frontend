import { RiArrowLeftSLine } from "react-icons/ri";
import BrandsBox from "./BrandsBox";

const JeanBrandBox = () => {
  return (
    <BrandsBox
      className="w-11/12 flex flex-col h-48 items-center bg-left justify-center gap-5 pl-14 lg:bg-center lg:w-6/12 lg:items-end lg:h-[200px]"
      backgroundImage={'url("/images/boxBackground.png")'}
    >
      <span className="font-kalameh font-bold text-3xl lg:text-4xl">
        شلوار جین وست
      </span>
      <span className="font-kalameh font-bold text-4xl text-[#FF6230] lg:text-5xl">
        jean
      </span>
      <div className="flex flex-row w-max cursor-pointer items-center transition-all duration-300 hover:shadow-md">
        <span className="font-iran-yekan font-medium text-sm bg-white px-3 py-1 rounded-r-md md:text-base">
          دیدن همه
        </span>
        <div className="bg-black p-1.5 rounded-l-md md:p-2">
          <RiArrowLeftSLine className="text-white" />
        </div>
      </div>
    </BrandsBox>
  );
};

export default JeanBrandBox;

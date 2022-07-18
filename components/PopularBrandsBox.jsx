import Image from "next/image";
import { FaStar } from "react-icons/fa";
import tscoBrand from "../public/images/brands/tsco.png";

const PopularBrandsBox = ({ src, count, rate }) => {
  return (
    <div className="group cursor-pointer bg-white w-max px-7 py-5 rounded-lg transition-all duration-300 drop-shadow-md scale-90 hover:drop-shadow-xl hover:scale-105 hover:shadow-[#FF6230]/40 hover:shadow-md">
      <div>
        <Image
          loading="eager"
          src={src}
          width={160}
          height={160}
          alt="Brands icon"
        />
      </div>
      <div className="flex flex-col items-center font-iran-yekan opacity-0 transition-all duration-300 group-hover:opacity-100 ">
        <span className="font-bold text-xl">{count}+ کالا</span>
        <div className="flex flex-rowfont-medium text-lg">
          <span>محبوبیت</span>
          <span className="flex flex-row items-center mr-7">
            <FaStar className="text-yellow-500 ml-2" />
            {rate}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

PopularBrandsBox.defaultProps = { src: tscoBrand, count: 62, rate: 4.2 };

export default PopularBrandsBox;

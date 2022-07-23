import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import shoesSVG from "../public/svgs/shoes.svg";

const ProductItem = ({
  title,
  offer,
  rate,
  offerPercent,
  offerPrice,
  originalPrice,
}) => {
  return (
    <Link href="/product" passHref>
      <div className="relative w-max cursor-pointer bg-white px-9 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-[#FF6230]/30 hover:shadow-md ">
        <div className="absolute left-6 top-5 flex flex-row gap-2 items-center">
          <FaStar className="text-yellow-400" />
          {rate}
        </div>
        <Image src={shoesSVG} width={150} height={150} alt="Product image" />
        <span className="w-44 text-center font-iran-yekan font-medium text-lg">
          {title}
        </span>
        {offer ? (
          <div className="flex flex-row items-center gap-8  mt-10">
            <span className="text-white bg-red-600 font-iran-yekan font-medium text-base flex items-center justify-center py-0.5 px-3 rounded-sm">
              {offerPercent}
            </span>

            <span className="text-red-600 line-through">
              <span className="text-black font-iran-yekan font-medium text-base">
                {originalPrice}
              </span>
            </span>
          </div>
        ) : null}
        <span className="flex flex-row items-center gap-2 mt-5 mb-10 text-black font-iran-yekan font-bold text-xl">
          {offerPrice}
          <span className="font-iran-yekan font-medium text-base">تومان</span>
        </span>
      </div>
    </Link>
  );
};

ProductItem.defaultProps = {
  offer: true,
  rate: 4.5,
  offerPercent: "%10",
  originalPrice: "105.000",
  offerPrice: "237.0000",
  title: "کفش ورزشی آدیداس مدل آراز",
};

export default ProductItem;

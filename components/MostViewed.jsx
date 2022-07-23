import Image from "next/image";
import mostViewedImage from "../public/images/mostViewed.png";

const MostViewed = () => {
  return (
    <div className="w-11/12 mx-auto lg:w-full lg:mx-0">
      <div className="w-full flex flex-row justify-between items-center">
        <span className="font-kalameh font-bold text-xl">
          پربازدید های هفته
        </span>
        <span className="font-iran-yekan font-medium text-base cursor-pointer text-[#3F8CFF] transition-all duration-300 hover:drop-shadow-md">
          مشاهده همه
        </span>
      </div>
      <div className="grid my-16 place-items-center grid-cols-2 gap-y-1 gap-x-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6">
        <MostViewedBox />
        <MostViewedBox />
        <MostViewedBox />
        <MostViewedBox />
        <MostViewedBox />
        <MostViewedBox />
        <MostViewedBox />
        <MostViewedBox />
      </div>
    </div>
  );
};

const MostViewedBox = ({ src, buy, view }) => {
  return (
    <div className="group w-full bg-white px-10 py-6 rounded-md flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[#FF6230]/30 hover:shadow-md">
      <div>
        <Image src={src} width={150} height={150} alt="Product image" />
      </div>
      <div className="font-iran-yekan font-medium text-base flex flex-row justify-between w-full gap-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <span>
          <span className="mr-5">{buy}</span> خرید
        </span>
        <span>
          <span className="mr-5">{view}</span> بازدید
        </span>
      </div>
    </div>
  );
};

MostViewedBox.defaultProps = { src: mostViewedImage, buy: 523, view: 5012 };

export default MostViewed;

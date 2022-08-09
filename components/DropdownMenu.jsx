import Image from "next/image";
import phoneAltSVG from "../public/svgs/phoneAlt.svg";
import { RiArrowLeftSLine } from "react-icons/ri";
import paintSVG from "../public/svgs/paint.svg";
import bagSVG from "../public/svgs/bag.svg";
import bellAlt from "../public/svgs/bellAlt.svg";
import bookAltSVG from "../public/svgs/bookAlt.svg";
import heartSVG from "../public/svgs/heart.svg";
import lifegaurdSVG from "../public/svgs/lifegaurd.svg";
import workSVG from "../public/svgs/work.svg";
import treeSVG from "../public/svgs/tree.svg";
import dropdownData from "../fakeData/dropdown";
import productImage from "../public/images/product.png";
import { useEffect, useState } from "react";

const DropdownMenu = () => {
  const [currentId, setCurrentId] = useState(1);
  useEffect(() => console.dir(currentId), [currentId]);
  return (
    <div className="py-9 w-[85vw] flex justify-center items-center bg-white rounded-lg drop-shadow-md">
      <div className="w-11/12">
        <div className="flex flex-row items-center gap-14 bg-[#F2F0F1] w-full font-iran-yekan font-medium py-4 px-12 rounded-2xl">
          <div className="flex flex-row items-center gap-4 text-lg text-[#3F8CFF]">
            <Image src={phoneAltSVG} width={16} height={20} alt="Phone" />
            <span className="text-base">کالای دیجیتال</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="text-[#676D7C]">همه محصولات کالای دیجیتال</span>
            <RiArrowLeftSLine className="text-[#3F8CFF]" />
          </div>
        </div>
        <div className="mt-8 flex flex-row">
          <div className="flex flex-col gap-10">
            <ParentItem
              title="ابزار و تجهیزات صنعتی"
              src={paintSVG}
              id="1"
              setId={setCurrentId}
            />
            <ParentItem
              title="مد و پوشاک"
              src={paintSVG}
              id="2"
              setId={setCurrentId}
            />
            <ParentItem
              title="کالا های سوپر مارکتی"
              src={bagSVG}
              id="3"
              setId={setCurrentId}
            />
            <ParentItem
              title="اسباب بازی و کودک"
              src={lifegaurdSVG}
              id="4"
              setId={setCurrentId}
            />
            <ParentItem
              title="خانه و آشپز خانه"
              src={bellAlt}
              id="5"
              setId={setCurrentId}
            />
            <ParentItem
              title="ورزش و سفر"
              src={workSVG}
              id="6"
              setId={setCurrentId}
            />
            <ParentItem
              title="محصولات بومی و محلی"
              src={treeSVG}
              id="7"
              setId={setCurrentId}
            />
            <ParentItem
              title="زیبایی و سلامت"
              src={heartSVG}
              id="8"
              setId={setCurrentId}
            />
            <ParentItem
              title="کتاب و لوازم تحریر"
              src={bookAltSVG}
              id="9"
              setId={setCurrentId}
            />
          </div>
          <div className="min-h-full w-[1px] bg-[#ABB9CF] mx-9"></div>
          <div className="grid grid-cols-4 justify-center gap-x-7 gap-y-5">
            {dropdownData[currentId] ? (
              dropdownData[currentId]?.map((item, key) => {
                return <ChildItem item={item} key={key} />;
              })
            ) : (
              <span>لیستی وجود ندارد</span>
            )}
          </div>
          <div className="h-full flex mr-auto  self-center py-16 px-4 rounded-xl border-[#8A86A1]/30 border-[1px]">
            <Image src={productImage} layout="intrinsic" alt="Product Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ChildItem = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 font-iran-yekan">
      <div className="flex flex-row gap-2 items-center cursor-pointer">
        <span className="font-medium text-lg">{item.title}</span>
        <RiArrowLeftSLine className="text-[#3F8CFF] text-base" />
      </div>
      <ul className="flex flex-col gap-2">
        {item.childs.map((item, key) => (
          <li
            className="font-iran-yekan font-normal text-base text-[#676D7C] transition-colors duration-300 cursor-pointer hover:text-gray-800"
            key={key}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ParentItem = ({ title, icon, src, id, setId }) => {
  return (
    <div
      onMouseEnter={() => setId(id)}
      className="flex flex-row items-center cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      {icon ? (
        icon
      ) : src ? (
        <Image src={src} width={24} height={24} alt="" />
      ) : null}
      <span className="font-iran-yekan mr-4 font-medium text-lg">{title}</span>
    </div>
  );
};

export default DropdownMenu;

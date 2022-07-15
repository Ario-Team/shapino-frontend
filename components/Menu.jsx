import menuData from "../fakeData/menu";
import { HiMenuAlt1, HiMenuAlt2, HiMenuAlt3, HiMenuAlt4 } from "react-icons/hi";
import { useEffect, useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setOpen(true);
    }
    window.onresize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
  }, []);
  return (
    <div>
      <div
        className="peer flex flex-row gap-3 font-iran-yekan font-bold items-center bg-gray-300 w-max mx-auto text-white px-5 py-3 lg:hidden"
        data-open={open}
        onClick={() => setOpen((o) => !o)}
      >
        <HiMenuAlt1 className="text-xl" />
        <span>دسته بندی</span>
      </div>
      <ul
        className={` ${
          open
            ? "bg-white border-2 border-gray-200 w-max text-center px-10 py-5 mx-auto z-20"
            : "hidden"
        } grid-flow-col gap-x-8 auto-cols-max place-items-center place-content-center mt-2 lg:visible lg:border-none lg:w-full lg:grid`}
      >
        {menuData.map((item, key) => {
          return <MenuItem key={key} name={item} />;
        })}
      </ul>
    </div>
  );
};

const MenuItem = ({ name }) => {
  const isCategory = name == "دسته بندی";
  return (
    <li
      className={`font-iran-yekan font-normal flex flex-row items-center gap-2 text-black transition-opacity duration-300 cursor-pointer opacity-80 hover:opacity-100 ${
        isCategory ? "hidden lg:flex" : " "
      }`}
    >
      {isCategory ? <HiMenuAlt1 className="rotate-180" /> : null}
      {name}
    </li>
  );
};
export default Menu;

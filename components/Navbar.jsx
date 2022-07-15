import Image from "next/image";
import logoSVG from "../public/svgs/logo.svg";
import { FaPhone, FaSearch } from "react-icons/fa";
import classes from "../styles/components/Navbar/index.module.scss";

const Navbar = () => {
  return (
    <div className="mt-5 px-2">
      <nav
        className={`${classes.navbar} grid grid-cols-1 place-items-center w-full gap-6 sm:grid-cols-2 lg:grid-cols-3`}
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="w-8 h-max">
            <Image
              src={logoSVG}
              layout="responsive"
              width={50}
              height={50}
              alt="Logo"
            />
          </div>
          <span className="text-blue-500 font-bold font-kalameh text-2xl">
            شاپینو
          </span>
        </div>
        <div className="flex flex-row items-center gap-3 h-max">
          <span className="font-iran-yekan font-bold text-lg">
            09906198476 - 021-6420
          </span>
          <FaPhone className="text-gray-600 text-xl" />
        </div>
        <div className="w-full relative sm:col-span-2 lg:col-span-1 lg:max-w-2xl">
          <input
            placeholder="جستجو بیش از 8 هزار کالا"
            className="font-iran-yekan font-normal outline-none border-2 text-sm pr-2 border-gray-200 rounded-lg w-full h-14 transition-colors duration-300 hover:border-gray-300 focus:border-gray-300"
          />
          <div className="w-max h-max absolute top-3 left-3 bg-gray-200 px-2 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-300">
            <FaSearch className="text-lg text-white" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import logoSVG from "../public/svgs/logo.svg";
import phoneSVG from "../public/svgs/phone.svg";
import searchSVG from "../public/svgs/search.svg";
import classes from "../styles/components/Navbar/index.module.scss";

const Navbar = () => {
  return (
    <div className="mt-5 px-2 min-w-full lg:px-0">
      <nav
        className={`${classes.navbar} grid grid-cols-1 auto-rows-max auto-cols-max justify-items-center items-center w-full gap-6 sm:grid-cols-2 lg:grid-cols-3`}
      >
        <Link href="/" passHref prefetch>
          <div className="cursor-pointer flex flex-row items-center justify-center gap-2 lg:justify-self-start lg:mr-5">
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
        </Link>
        <div className="flex flex-row items-center gap-3 h-max lg:justify-self-end lg:ml-5">
          <div className="flex gap-2">
            <Link href="tel:0216420" passHref>
              <span className="font-iran-yekan font-extrabold text-base text-gray-700 cursor-pointer transition-color duration-300 hover:text-gray-900">
                021-6420
              </span>
            </Link>
            -
            <Link href="tel:+9809906198476" passHref>
              <span className="font-iran-yekan font-extrabold text-base text-gray-700 cursor-pointer transition-color duration-300 hover:text-gray-900">
                09906198476
              </span>
            </Link>
          </div>
          <div>
            <Image
              src={phoneSVG}
              width={24}
              height={24}
              alt="phone svg"
              loading="eager"
            />
          </div>
        </div>
        <div className="w-full relative sm:col-span-2 lg:col-span-1 lg:max-w-2xl">
          <input
            placeholder="جستجو بیش از 8 هزار کالا"
            className="font-iran-yekan font-normal bg-transparent outline-none border-2 text-sm pr-2 border-[#7C8DA6]/30 rounded-lg w-full h-14 transition-colors duration-300 hover:border-[#7C8DA6]/50 focus:border-[#7C8DA6]/50"
          />
          <div className=" flex justify-center items-center w-max h-max absolute top-3 left-3 bg-gray-400 bg-opacity-80 px-3 py-1.5 rounded-lg transition-colors duration-300 cursor-pointer hover:bg-gray-500">
            <Image src={searchSVG} width={20} height={20} alt="search icon" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

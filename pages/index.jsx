import MainLayout from "../layouts/MainLayout";
import IndexSlider from "../components/IndexSlider";
import Head from "next/head";
import Menu from "../components/Menu";
import IconCategory from "../components/IconCategory";
import OfferedProducts from "../components/OfferedProducts";
import BrandsBox from "../components/BrandsBox";
import { RiArrowLeftSLine } from "react-icons/ri";
import Image from "next/image";
import backgroundImage from "../public/images/boxBackground.png";
import SonyBox from "../components/SonyBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>شاپیفای</title>
      </Head>
      <MainLayout>
        <div className="mb-5">
          <Menu />
          <IndexSlider />
          <IconCategory />
          <OfferedProducts />
          <div className="flex flex-col items-center gap-5 w-full justify-between my-10 lg:flex-row">
            <SonyBox />
            <BrandsBox
              className="w-11/12 flex flex-col h-48 items-center bg-left justify-center gap-5 pl-14 lg:bg-center lg:w-6/12 lg:items-end lg:h-[200px]"
              backgroundImage={'url("/images/boxBackground.png")'}
            >
              <span className="font-kalameh font-bold text-2xl">
                شلوار جین وست
              </span>
              <span className="font-kalameh font-bold text-3xl text-[#FF6230]">
                jean
              </span>
              <div className="flex flex-row items-center font-iran-yekan font-medium text-sm">
                <span className="bg-white px-3 py-2 rounded-r-md">
                  مشاهده همه
                </span>
                <div className="bg-black px-2 py-1.5 rounded-l-md">
                  <RiArrowLeftSLine className="text-2xl text-white" />
                </div>
              </div>
            </BrandsBox>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

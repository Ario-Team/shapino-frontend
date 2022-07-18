import MainLayout from "../layouts/MainLayout";
import IndexSlider from "../components/IndexSlider";
import Head from "next/head";
import Menu from "../components/Menu";
import IconCategory from "../components/IconCategory";
import OfferedProducts from "../components/OfferedProducts";
import SonyBox from "../components/SonyBox";
import JeanBrandBox from "../components/JeanBrandBox";
import PopularBrands from "../components/PopularBrands";
import MostSellSlider from "../components/MostSellSlider";
import XiaomiFestival from "../components/XiaomiFestival";
import ProductDailyRecommendSlider from "../components/ProductDailyRecommendSlider";
import BlogPostsSlider from "../components/BlogPostsSlider";

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
            <JeanBrandBox />
          </div>
          <MostSellSlider />
          <PopularBrands />
          <XiaomiFestival />
          <ProductDailyRecommendSlider />
          <BlogPostsSlider />
        </div>
      </MainLayout>
    </>
  );
}

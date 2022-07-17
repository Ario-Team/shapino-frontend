import MainLayout from "../layouts/MainLayout";
import IndexSlider from "../components/IndexSlider";
import Head from "next/head";
import Menu from "../components/Menu";
import IconCategory from "../components/IconCategory";
import OfferedProducts from "../components/OfferedProducts";

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
        </div>
      </MainLayout>
    </>
  );
}

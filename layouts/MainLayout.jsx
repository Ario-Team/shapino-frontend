import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="xl:mx-20 2xl:mx-52 max-w-[2061px] xxl:mx-auto">
      <header>
        <Navbar />
        <hr className="my-5 w-full" />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

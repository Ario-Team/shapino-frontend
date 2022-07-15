import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="xl:mx-20 2xl:mx-52">
      <Navbar />
      <hr className="my-5 w-full" />
      <Menu />
    </div>
  );
};

export default MainLayout;

import Menu from "../components/Menu";
import RecentPosts from "../components/posts/RecentPosts";
import MainLayout from "../layouts/MainLayout";

const posts = () => {
  return (
    <MainLayout>
      <Menu />
      <div className="my-16 w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-12">
        <div className="sm:col-span-6 lg:col-span-5 max-w-sm">
          <RecentPosts />
        </div>
      </div>
    </MainLayout>
  );
};

export default posts;

import Menu from "../components/Menu";
import PostBox from "../components/posts/PostBox";
import RecentPosts from "../components/posts/RecentPosts";
import MainLayout from "../layouts/MainLayout";

const posts = () => {
  return (
    <MainLayout>
      <Menu />
      <div className="my-16 w-11/12 mx-auto grid grid-cols-1 justify-items-center gap-y-10 gap-x-5 sm:grid-cols-12 sm:w-full">
        <div className="w-full flex flex-col gap-4 sm:col-span-6 lg:col-span-7 xl:col-span-8 2xl:col-span-9">
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
        </div>
        <div className="sm:col-span-6 lg:col-span-5 xl:col-span-4 2xl:col-span-3 xxl:col-span-3 max-w-xl">
          <RecentPosts />
        </div>
      </div>
    </MainLayout>
  );
};

export default posts;

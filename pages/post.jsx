import PathNav from "../components/PathNav";
import BlogContent from "../components/posts/BlogContent";
import RecentPosts from "../components/posts/RecentPosts";
import TitlesList from "../components/posts/TitlesList";
import MainLayout from "../layouts/MainLayout";

const post = () => {
  return (
    <MainLayout>
      <PathNav path={["دیجی مارکت", "صفحه مقالات", "خرید محصولات دیجیتال"]} />
      <div className="flex flex-col sm:flex-row w-full gap-2 justify-between">
        <div className="w-11/12 sm:w-8/12">
          <BlogContent />
        </div>
        <div className="flex flex-col gap-5 w-4/12">
          <TitlesList />
          <RecentPosts />
        </div>
      </div>
    </MainLayout>
  );
};

export default post;

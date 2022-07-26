import RecentPostsItem from "./RecentPostsItem";

const RecentPosts = () => {
  return (
    <div className="flex flex-col items-center py-8 px-9 bg-white w-max mx-auto rounded-lg h-max lg:mx-0">
      <span className="font-iran-yekan font-normal text-lg bg-[#707070]/5 px-16 py-3 opacity-80 transition-opacity duration-300 hover:opacity-100">
        آخرین مطالب
      </span>
      <div className="mt-10 flex flex-col gap-3">
        <RecentPostsItem />
        <RecentPostsItem />
        <RecentPostsItem />
        <RecentPostsItem />
      </div>
    </div>
  );
};

export default RecentPosts;

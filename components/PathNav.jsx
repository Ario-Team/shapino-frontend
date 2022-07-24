import { MdKeyboardArrowLeft } from "react-icons/md";

const PathNav = ({ path }) => {
  return (
    <div className="w-full mb-7 bg-[#676D7C]/5 font-iran-yekan text-sm font-normal flex flex-row gap-2 py-3 px-6 items-center">
      {path
        ? path.map((item, key) => (
            <span
              key={key}
              className="flex text-[#7C8DA6] flex-row gap-2 items-center"
            >
              {item}
              {key != path.length - 1 ? (
                <MdKeyboardArrowLeft className="text-base" />
              ) : null}
            </span>
          ))
        : null}
    </div>
  );
};

export default PathNav;

import Image from "next/image";
import React, { useState } from "react";
import tikBlueSVG from "../public/svgs/tikBlue.svg";
import tikEmptySVG from "../public/svgs/tikEmpty.svg";

const Tik = ({ checked }) => {
  const [activeIcon, setActiveIcon] = useState(
    checked ? tikBlueSVG : tikEmptySVG
  );
  const [activeName, setActiveName] = useState(
    checked ? "tikBlueSVG" : "tikEmptySVG"
  );
  return (
    <Image
      src={activeIcon}
      onClick={(e) => {
        if (activeName == "tikBlueSVG") {
          setActiveIcon(tikEmptySVG);
          setActiveName("tikEmptySVG");
        } else if (activeName == "tikEmptySVG") {
          setActiveIcon(tikBlueSVG);
          setActiveName("tikBlueSVG");
        }
      }}
      width={24}
      height={24}
      className="cursor-pointer"
      alt="tik"
    />
  );
};

export default Tik;

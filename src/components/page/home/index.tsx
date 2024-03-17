import React, { useEffect, useState } from "react";
import { homeSubtitle, jobTitle, name } from "../../../constants/strings";
import { COMPONENT_OBJECT } from "../../../constants";
import { useActiveTab } from "../../../context/ActiveTabContext";

const HomePage: React.FC = () => {
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);
  const { setActiveTab } = useActiveTab();

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <div className="w-full pt-10 font-fira flex pt-2 flex justify-center items-center flex-col">
      <div
        className={`animated-container desktop:w-1/2 w-full font-fira p-10 desktop:h-full ${
          animationStarted ? "animate" : ""
        }`}
      >
        <div className="constClass text-[50px]">{name}</div>
        <div className="exportTextClass text-[40px]">{jobTitle}</div>
        <div className="yellowTextClass text-[20px]">{homeSubtitle}</div>
      </div>
      <div
        className={`animated-container flex desktop:w-1/2 w-full font-fira p-10 desktop:h-full ${
          animationStarted ? "animate" : ""
        }`}
      >
        <div
          className="mx-2 hover:text-[#38bdf8] cursor-pointer"
          onClick={() => setActiveTab(COMPONENT_OBJECT.FILE)}
        >
          My skillset
        </div>
        <div
          className="mx-2 hover:text-[#38bdf8] cursor-pointer"
          onClick={() => setActiveTab(COMPONENT_OBJECT.PERSON)}
        >
          About me
        </div>
        <div
          className="mx-2 hover:text-[#38bdf8] cursor-pointer"
          onClick={() => setActiveTab(COMPONENT_OBJECT.MAIL)}
        >
          Contact me
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import { SOCIALS, socialArr } from "../../../constants";

const Social: React.FC = () => {
  const handleLink = (type: string, value: string) => {
    if (type === SOCIALS.EMAIL) {
      window.location.href = `mailto:${value}`;
    } else {
      window.open(value, "_blank");
    }
  };

  return (
    <div className="flex text-white items-center pt-10 desktop:pt-10 pl-10 font-fira flex-col text-[12px] tablet:text-[14px] desktop:text-[16px] tablet:w-1/3 w-screen">
      <div className="flex flex-col items-start">
        <div className="pb-4 constClass">You can connect with me below!</div>
        <div className="flex">
          <p className="pr-2 exportTextClass">{"export"}</p>
          <p className="pr-2 constClass">{"const"}</p>
          <p className="">{"Socials"}</p>
          <p className="pr-2 exportTextClass">{":"}</p>
          <p className="pr-2 text-amber-300">{"SocialProps"}</p>
          <p className="pr-2">{"{"}</p>
        </div>
        <div className="ml-10">
          {socialArr.map(({ key, text, link }) => (
            <div className="flex" key={key}>
              <div className="mr-2">{key}:</div>
              <button
                className="stringConsoleClass hover:text-[#8bf08d] cursor-pointer"
                onClick={() => handleLink(key, link)}
              >
                {text}
              </button>
            </div>
          ))}
        </div>
        <div className="">
          <p>{"}"}</p>
        </div>
      </div>
    </div>
  );
};

export default Social;

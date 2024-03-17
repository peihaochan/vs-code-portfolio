import React from "react";
import AppleTab from "./AppleTab";
import { name } from "../constants/strings";

const ActionArr = ["File", "Edit", "Selection", "View", "Go"];
const ActionBar: React.FC = () => {
  return (
    <div className={`desktop:flex justify-between bg-[#1e1e1e] w-full hidden`}>
      <div className="flex flex-row">
        {ActionArr.map((item) => (
          <div key={item} className="text-slate-50 w-min mx-2 my-1 text-sm">
            {item}
          </div>
        ))}
      </div>
      <div className="text-slate-50 text-sm">{name} - Visual Studio Code</div>
      <AppleTab />
    </div>
  );
};

export default ActionBar;

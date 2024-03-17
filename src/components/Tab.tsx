import React from "react";
import { useActiveTab } from "../context/ActiveTabContext";

interface Iprops {
  id: string;
  setPage: (id: string) => void;
  icon: React.ComponentType<any>;
}

const Tab: React.FC<Iprops> = ({ id, icon: Icon, setPage }) => {
  const { activeTab } = useActiveTab();
  return (
    <div
      className={`flex text-sm items-center justify-center w-[110px] desktop:w-[150px] border-l-[1px] border-r-[1px] border-x-[#333232] h-[40px] cursor-pointer ${
        activeTab === id
          ? "bg-[#2d2d30] border-t-2 border-t-blue-500"
          : "bg-[#1e1e1e]"
      } `}
      onClick={() => setPage(id)}
    >
      <span className="pr-1">
        <Icon />
      </span>
      {id}.html
    </div>
  );
};

export default Tab;

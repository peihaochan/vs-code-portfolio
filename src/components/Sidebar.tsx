import React from "react";
import { bottomComponent, topComponent } from "../constants";
import { useActiveTab } from "../context/ActiveTabContext";

interface Iprops {
  setPage: (id: string) => void;
  setHoverInfoBol: React.Dispatch<React.SetStateAction<null | string>>;
  hoverInfoBol: null | string;
}

const Sidebar: React.FC<Iprops> = ({
  setPage,
  setHoverInfoBol,
  hoverInfoBol,
}) => {
  const { activeTab } = useActiveTab();
  return (
    <div
      className={`bg-[#1e1e1e] text-slate-50 h-full w-auto border-r-black flex flex-col justify-between`}
    >
      <div>
        {topComponent.map(({ component: Component, id, hoverInfo }) => (
          <div
            key={id}
            className={`p-3 cursor-pointer ${
              activeTab === id
                ? "border-l-4 border-blue-500"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => setPage(id)}
            onTouchStart={() => {
              setHoverInfoBol(id);
            }}
            onTouchEnd={() => {
              setHoverInfoBol(null);
            }}
            onMouseEnter={() => {
              setHoverInfoBol(id);
            }}
            onMouseLeave={() => {
              setHoverInfoBol(null);
            }}
          >
            {hoverInfoBol === id && (
              <div className="absolute bg-[#2d2d30] z-2 border p-2 border-blue-500 left-[80px]">
                {hoverInfo}
              </div>
            )}
            <Component className="w-[20px] desktop:w-[30px]" />
          </div>
        ))}
      </div>
      <div>
        {bottomComponent.map(({ component: Component, id, hoverInfo }) => (
          <div
            key={id}
            className={`p-3 cursor-pointer ${
              activeTab === id
                ? "border-l-4 border-blue-500"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => setPage(id)}
            onTouchStart={() => {
              setHoverInfoBol(id);
            }}
            onTouchEnd={() => {
              setHoverInfoBol(null);
            }}
            onMouseEnter={() => {
              setHoverInfoBol(id);
            }}
            onMouseLeave={() => {
              setHoverInfoBol(null);
            }}
          >
            {hoverInfoBol === id && (
              <div className="absolute bg-[#2d2d30] z-2 border p-2 border-blue-500 left-[80px]">
                {hoverInfo}
              </div>
            )}
            <Component className="w-[20px] desktop:w-[30px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
const AppleTab: React.FC = () => {
  return (
    <div className="flex text-white items-center justify-center">
      <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center m-1"></div>
      <div className="w-3 h-3 bg-gray-200 rounded-full flex items-center justify-center m-1"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center m-1"></div>
    </div>
  );
};

export default AppleTab;

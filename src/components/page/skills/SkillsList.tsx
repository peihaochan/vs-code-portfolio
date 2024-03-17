import React from "react";
// import { skillsArray } from "../../../constants";
const SkillsList: React.FC = () => {
  // const getSkills = () => {
  //   return skillsArray;
  // };

  // console.log("skillsArray", skillsArray);

  return (
    <div className="flex items-center tablet:items-start justify-center w-full tablet:w-1/2 desktop:justify-start w-full">
      <div className="flex text-white pl-10 pt-10 desktop:pl-8 font-fira flex-col w-full">
        <div>
          {/* <div>{"const getSkills = () => {"}</div> */}
          <div className="flex">
            <div className="constClass pr-2">const</div>
            <div className="functionTextClass pr-2">getSkills</div>
            <div className="exportTextClass pr-2">=</div>
            <div className="constClass">{"() => {"}</div>
          </div>
          <div className="ml-8 flex">
            <div className="exportTextClass pr-2">return</div>
            <div className="text-white">skillsArray</div>
          </div>
          <div className="constClass">{"}"}</div>
        </div>

        <div className="font-fira my-2 flex">
          <div>console</div>
          <div className="dotClass">.</div>
          <div className="functionTextClass">log</div>
          <div className="constClass">{"("}</div>
          <div className="dotClass">{"'"}</div>
          <div className="stringConsoleClass">getSkills function:</div>
          <div className="dotClass">{"', "}</div>
          <div className="">getSkills</div>
          <div className="constClass">{")"}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;

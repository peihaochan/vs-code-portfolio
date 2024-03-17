import React from "react";
import SphereTagCloud from "./SphereTagCloud";
import SkillsList from "./SkillsList";

const SkillsPage: React.FC = () => {
  return (
    <div className={`flex tablet:flex-row flex-col`}>
      <SkillsList />
      <SphereTagCloud />
    </div>
  );
};

export default SkillsPage;

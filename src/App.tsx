import React, { useCallback, useState } from "react";
import "./App.scss";
import ActionBar from "./components/ActionBar";
import Sidebar from "./components/Sidebar";
import Tab from "./components/Tab";
import { COMPONENT_OBJECT, topComponent } from "./constants";
import ContactPage from "./components/page/contact";
import SkillsPage from "./components/page/skills";
import AboutPage from "./components/page/about";
import HomePage from "./components/page/home";
import { useActiveTab } from "./context/ActiveTabContext";

const App: React.FC = () => {
  const { activeTab, setActiveTab } = useActiveTab();
  const [hoverInfoBol, setHoverInfoBol] = useState<string | null>(null);

  const setPage = useCallback(
    (id: string) => {
      setActiveTab(id);
    },
    [setActiveTab]
  );

  return (
    <div className="flex flex-col w-screen h-screen">
      <ActionBar />

      <div className="flex h-full">
        <Sidebar
          setPage={setPage}
          setHoverInfoBol={setHoverInfoBol}
          hoverInfoBol={hoverInfoBol}
        />

        <div className="bg-[#2d2d30] text-slate-50 w-full">
          <div className="flex bg-[#1e1e1e]">
            {topComponent.map(({ id, icon }) => (
              <Tab key={id} id={id} setPage={setPage} icon={icon} />
            ))}
          </div>
          {activeTab === COMPONENT_OBJECT.FILE && <HomePage />}
          {activeTab === COMPONENT_OBJECT.GITHUB && <SkillsPage />}
          {activeTab === COMPONENT_OBJECT.MAIL && <ContactPage />}
          {activeTab === COMPONENT_OBJECT.PERSON && <AboutPage />}
          {activeTab === COMPONENT_OBJECT.SETTING && <HomePage />}
        </div>
      </div>
    </div>
  );
};

export default App;

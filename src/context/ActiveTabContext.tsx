import React, { createContext, useContext, useState, ReactNode } from "react";

type ActiveTabContextType = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const ActiveTabContext = createContext<ActiveTabContextType | undefined>(
  undefined
);

export const useActiveTab = () => {
  const context = useContext(ActiveTabContext);
  if (!context) {
    throw new Error("useActiveTab must be used within an ActiveTabProvider");
  }
  return context;
};

type ActiveTabProviderProps = {
  children: ReactNode;
};

export const ActiveTabProvider: React.FC<ActiveTabProviderProps> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<string>("file");

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

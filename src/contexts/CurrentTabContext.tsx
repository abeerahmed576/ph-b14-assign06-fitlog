"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TabName = "today" | "saved";
interface CurrentTabContextProps {
  currentTab: TabName;
  setCurrentTab: Dispatch<SetStateAction<TabName>>;
}

export const CurrentTabContext = createContext<CurrentTabContextProps>({
  currentTab: "today",
  setCurrentTab: () => {},
});

function CurrentTabProvider({ children }: { children: ReactNode }) {
  const [currentTab, setCurrentTab] = useState<"today" | "saved">("today");

  const contextData = {
    currentTab,
    setCurrentTab,
  };

  return (
    <CurrentTabContext.Provider value={contextData}>
      {children}
    </CurrentTabContext.Provider>
  );
}

export default CurrentTabProvider;

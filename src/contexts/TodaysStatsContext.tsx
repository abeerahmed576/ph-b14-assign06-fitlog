"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface TodaysStats {
  exercises: number;
  minutes: number;
  calories: number;
}

interface TodaysStatsContextProps {
  todaysStats: TodaysStats;
  setTodaysStats: Dispatch<SetStateAction<TodaysStats>>;
}

export const TodaysStatsContext = createContext<TodaysStatsContextProps>({
  todaysStats: {
    exercises: 0,
    minutes: 0,
    calories: 0,
  },
  setTodaysStats: () => {},
});

function TodaysStatsProvider({ children }: { children: ReactNode }) {
  const [todaysStats, setTodaysStats] = useState<TodaysStats>({
    exercises: 0,
    minutes: 0,
    calories: 0,
  });

  const contextData = {
    todaysStats,
    setTodaysStats,
  };

  return (
    <TodaysStatsContext.Provider value={contextData}>
      {children}
    </TodaysStatsContext.Provider>
  );
}

export default TodaysStatsProvider;

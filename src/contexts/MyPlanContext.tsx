"use client";

import { createContext, ReactNode, useState } from "react";
import { IWorkout } from "../types/Workout.type";
import { MyPlanContextProps } from "@/types/MyPlanContext.type";

export const MyPlanContext = createContext<MyPlanContextProps>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  remainingPlan: [],
  setRemainingPlan: () => {},
  savedForLater: [],
  setSavedForLater: () => {},
});

function MyPlanProvider({ children }: { children: ReactNode }) {
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);
  const [remainingPlan, setRemainingPlan] = useState<IWorkout[]>([]);
  const [savedForLater, setSavedForLater] = useState<IWorkout[]>([]);

  const contextData = {
    todaysPlan,
    setTodaysPlan,
    remainingPlan,
    setRemainingPlan,
    savedForLater,
    setSavedForLater,
  };

  return (
    <MyPlanContext.Provider value={contextData}>
      {children}
    </MyPlanContext.Provider>
  );
}

export default MyPlanProvider;

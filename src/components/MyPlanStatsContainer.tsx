"use client";

import { useContext, useEffect } from "react";
import CurrentTabProvider from "@/contexts/CurrentTabContext";
import { CurrentTabContext } from "@/contexts/CurrentTabContext";
import { MyPlanContext } from "@/contexts/MyPlanContext";
import PlanCardsContainer from "./my-plan/PlanCardsContainer";
import TodaysStatsProvider, {
  TodaysStatsContext,
} from "@/contexts/TodaysStatsContext";
import { IWorkout } from "@/types/Workout.type";

interface PlanInfoProps {
  label: string;
  info: number;
  specialClasses?: string;
}

function PlanInfo({ label, info, specialClasses }: PlanInfoProps) {
  return (
    <li className="space-y-2 flex flex-col flex-1">
      <span className="capitalize text-display text-sm">{label}</span>
      <span
        className={`capitalize font-brand font-semibold text-4xl sm:text-5xl ${specialClasses}`}
      >
        {info}
      </span>
    </li>
  );
}

function MyPlanStatsContainer() {
  const { currentTab } = useContext(CurrentTabContext);
  const { todaysPlan, savedForLater } = useContext(MyPlanContext);
  const { todaysStats, setTodaysStats } = useContext(TodaysStatsContext);

  useEffect(() => {
    const updateStats = (list: IWorkout[]) => {
      setTodaysStats({
        exercises: list.length,
        minutes: list.reduce(
          (acc, current): number => acc + current.duration,
          0,
        ),
        calories: list.reduce(
          (acc, current): number => acc + current.caloriesBurned,
          0,
        ),
      });
    };

    if (currentTab === "today") updateStats(todaysPlan);
    else if (currentTab === "saved") updateStats(savedForLater);
  }, [currentTab, todaysPlan, savedForLater]);

  return (
    <>
      <div className="px-6 sm:px-12 py-4 sm:py-8 bg-card-600 rounded-2xl border border-mist-800 flex justify-center items-center">
        <PlanInfo
          label="exercises"
          info={todaysStats.exercises}
          specialClasses="text-brand"
        />
        <PlanInfo label="minutes" info={todaysStats.minutes} />
        <PlanInfo label="calories" info={todaysStats.calories} />
      </div>
      <PlanCardsContainer />
    </>
  );
}

export default MyPlanStatsContainer;

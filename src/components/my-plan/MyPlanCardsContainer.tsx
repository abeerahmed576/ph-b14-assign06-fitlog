"use client";

import { MyPlanContext } from "@/contexts/MyPlanContext";
import { useContext, useState } from "react";
import MyPlanStripCardContainer from "./MyPlanStripCardContainer";
import { CurrentTabContext } from "@/contexts/CurrentTabContext";
import { IWorkout } from "@/types/Workout.type";

interface TabButtonProps {
  value: string;
  label: string;
  currentTab: string;
  handleTabClick: () => void;
}

function TabButton({
  value,
  currentTab,
  label,
  handleTabClick,
}: TabButtonProps) {
  return (
    <button
      onClick={() => handleTabClick()}
      type="button"
      className={`px-6 py-2.5 text-xs rounded-xl capitalize cursor-pointer font-medium ${currentTab === value ? "text-brand bg-card-400 border-mist-700" : ""}`}
    >
      {label}
    </button>
  );
}

function MyPlanCardsContainer() {
  const { todaysPlan, savedForLater } = useContext(MyPlanContext);
  const { currentTab, setCurrentTab } = useContext(CurrentTabContext);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const handleTabClick = () => {
    if (currentTab === "today") setCurrentTab("saved");
    else setCurrentTab("today");
  };

  const sortWorkouts = (workouts: IWorkout[]) => {
    const toSort = [...workouts];
    if (sortBy === "duration") toSort.sort((a, b) => a.duration - b.duration);
    else if (sortBy === "calories")
      toSort.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    else if (sortBy === "rating") toSort.sort((a, b) => b.rating - a.rating);

    return toSort;
  };

  const sortedTodaysPlan = sortWorkouts(todaysPlan);
  const sortedSavedForLater = sortWorkouts(savedForLater);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="tablist"
          className="w-max p-1 rounded-2xl bg-card-600 border border-mist-700"
        >
          <TabButton
            value="today"
            label="today's plan"
            currentTab={currentTab}
            handleTabClick={handleTabClick}
          />
          <TabButton
            value="saved"
            label="saved"
            currentTab={currentTab}
            handleTabClick={handleTabClick}
          />
        </div>
        <label className="form-control flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-center sm:justify-between w-full max-w-50">
          <span className="label-text min-w-max ml-1 sm:ml-0 sm:mb-0 text-display">
            Sort By
          </span>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="select rounded-xl"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>
      {currentTab === "today" ? (
        <MyPlanStripCardContainer list={sortedTodaysPlan} />
      ) : (
        <MyPlanStripCardContainer list={sortedSavedForLater} />
      )}
    </>
  );
}

export default MyPlanCardsContainer;

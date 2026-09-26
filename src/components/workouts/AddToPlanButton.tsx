"use client";

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyPlanContext } from "@/contexts/MyPlanContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IWorkout } from "@/types/Workout.type";

function AddToPlanButton({ data }: { data: IWorkout }) {
  const { setTodaysPlan } = useContext(MyPlanContext);

  const handleAddToPlan = () => {
    setTodaysPlan((prevPlans) => [...prevPlans, data]);
  };

  return (
    <button
      onClick={() => handleAddToPlan()}
      className="btn w-full sm:w-max px-10 py-6 sm:py-5 capitalize rounded-xl text-black bg-brand"
    >
      <FontAwesomeIcon className="size-4" icon={faCalendar} />
      add to today's plan
    </button>
  );
}

export default AddToPlanButton;

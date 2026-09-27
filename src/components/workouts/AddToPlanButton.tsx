"use client";

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyPlanContext } from "@/contexts/MyPlanContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IWorkout } from "@/types/Workout.type";
import { toast } from "react-toastify";

function AddToPlanButton({ data }: { data: IWorkout }) {
  const { todaysPlan, setTodaysPlan, setRemainingPlan } =
    useContext(MyPlanContext);

  const handleAddToPlan = () => {
    const isAlreadySelected = todaysPlan.some((item) => item.id === data.id);

    if (isAlreadySelected) {
      toast.error("Already added to plan!");
      return;
    }

    if (todaysPlan.length >= 5) {
      toast.error("5 items already loaded. Finish them first to load more!");
      return;
    }

    setTodaysPlan((prevPlans) => [...prevPlans, data]);
    setRemainingPlan((prevPlans) => [...prevPlans, data]);
    toast.success("Added to today's plan");
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

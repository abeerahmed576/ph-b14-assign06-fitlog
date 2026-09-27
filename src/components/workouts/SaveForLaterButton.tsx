"use client";

import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyPlanContext } from "@/contexts/MyPlanContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IWorkout } from "@/types/Workout.type";
import { toast } from "react-toastify";

function SaveForLaterButton({ data }: { data: IWorkout }) {
  const { savedForLater, setSavedForLater } = useContext(MyPlanContext);

  const handleAddToPlan = () => {
    const isAlreadySelected = savedForLater.some((item) => item.id === data.id);

    if (isAlreadySelected) {
      toast.error("Already added to saved!");
      return;
    }

    setSavedForLater((prevPlans) => [...prevPlans, data]);
    toast.success("Added to saved");
  };

  return (
    <button
      onClick={() => handleAddToPlan()}
      className="btn w-full sm:w-max px-10 py-6 sm:py-5 capitalize rounded-xl border border-gray-600 bg-transparent text-display-light"
    >
      <FontAwesomeIcon className="size-4" icon={faBookmark} />
      save for later
    </button>
  );
}

export default SaveForLaterButton;

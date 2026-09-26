"use client";

import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyPlanContext } from "@/contexts/MyPlanContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IWorkout } from "@/types/Workout.type";

function SaveForLaterButton({ data }: { data: IWorkout }) {
  const { setSavedForLater } = useContext(MyPlanContext);

  const handleAddToPlan = () => {
    setSavedForLater((prevSavedLater) => [...prevSavedLater, data]);
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

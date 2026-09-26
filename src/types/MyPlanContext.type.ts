import { Dispatch, SetStateAction } from "react";
import { IWorkout } from "./Workout.type";

export interface MyPlanContextProps {
  todaysPlan: IWorkout[];
  setTodaysPlan: Dispatch<SetStateAction<IWorkout[]>>;
  savedForLater: IWorkout[];
  setSavedForLater: Dispatch<SetStateAction<IWorkout[]>>;
}

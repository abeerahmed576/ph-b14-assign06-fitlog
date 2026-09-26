import { IWorkout } from "@/types/Workout.type";
import EmptyPlan from "./EmptyPlan";
import WorkoutStripCard from "../shared/WorkoutStripCard";

function WorkoutStripCardContainer({ list }: { list: IWorkout[] }) {
  return (
    <ul className="space-y-4">
      {list.length === 0 ? (
        <li>
          <EmptyPlan />
        </li>
      ) : (
        list.map((item) => (
          <li key={item.id}>
            <WorkoutStripCard data={item} />
          </li>
        ))
      )}
    </ul>
  );
}

export default WorkoutStripCardContainer;

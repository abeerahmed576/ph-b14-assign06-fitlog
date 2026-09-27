import { IWorkout } from "@/types/Workout.type";
import EmptyPlan from "./EmptyPlan";
import MyPlanStripCard from "./MyPlanStripCard";

function MyPlanStripCardContainer({ list }: { list: IWorkout[] }) {
  return (
    <ul className="space-y-4">
      {list.length === 0 ? (
        <li>
          <EmptyPlan />
        </li>
      ) : (
        list.map((item) => (
          <li key={item.id}>
            <MyPlanStripCard data={item} />
          </li>
        ))
      )}
    </ul>
  );
}

export default MyPlanStripCardContainer;

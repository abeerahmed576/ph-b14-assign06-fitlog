import { IWorkout } from "@/types/Workout.type";
import WorkoutCard from "./WorkoutCard";

const getWorkouts = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

async function WorkoutsContainer() {
  const datas: IWorkout[] = await getWorkouts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {datas.map((data) => (
        <WorkoutCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export default WorkoutsContainer;

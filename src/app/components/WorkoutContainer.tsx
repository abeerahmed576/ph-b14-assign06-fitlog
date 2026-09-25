import { Suspense } from "react";
import { IWorkout } from "../types/Workout.type";
import WorkoutCard from "./shared/WorkoutCard";

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

async function WorkoutContainer() {
  const datas: IWorkout[] = await getWorkouts();

  return (
    <section id="library" className="container mx-auto mb-10">
      <div className="mb-8 text-center sm:text-start">
        <h2 className="uppercase text-3xl font-brand font-bold">the library</h2>
        <p className="text-display text-sm sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="my-40 space-x-3 text-center">
            <span className="mb-2 loading loading-spinner"></span>
            <span className="text-2xl">Loading Workouts</span>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datas.map((data) => (
            <WorkoutCard key={data.id} data={data} />
          ))}
        </div>
      </Suspense>
    </section>
  );
}

export default WorkoutContainer;

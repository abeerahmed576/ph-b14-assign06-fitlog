import { IWorkout } from "@/types/Workout.type";
import WorkoutCard from "./WorkoutCard";
import Link from "next/link";

const getWorkouts = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

  if (!res.ok) {
    return [];
  }

  return res.json();
};

async function WorkoutsContainer() {
  const datas: IWorkout[] = await getWorkouts();

  const jsx =
    datas.length === 0 ? (
      <div className="p-10 md:p-30 space-y-8 text-center border border-gray-700 rounded-2xl">
        <div className="space-y-2">
          <h1 className="text-2xl font-brand font-bold uppercase">
            something went wrong
          </h1>
          <p className="text-display">
            Unable to the workouts right now. Please try again.
          </p>
        </div>
        <Link href="/#library">
          <button className="min-w-fit px-10 py-6 sm:py-5 capitalize text-black btn bg-brand rounded-lg">
            try again
          </button>
        </Link>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {datas.map((data) => (
          <WorkoutCard key={data.id} data={data} />
        ))}
      </div>
    );

  return jsx;
}

export default WorkoutsContainer;

import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import AddToPlanButton from "@/components/workouts/AddToPlanButton";
import SaveForLaterButton from "@/components/workouts/SaveForLaterButton";
import getData from "@/lib/getData";
import { IWorkout } from "@/types/Workout.type";

export const metadata: Metadata = {
  title: "Workout Details - Fit Log",
};

interface WorkoutDetailasProps {
  params: {
    id: number;
  };
}

function InfoStrip({ info, label }: { info: string | number; label: string }) {
  return (
    <tr className="py-4 px-7 flex border-b border-b-gray-800 justify-between items-center">
      <td className="font-medium text-display text-sm sm:text-base capitalize">
        {label}
      </td>
      <td className="text-display-light text-sm sm:text-base">{info}</td>
    </tr>
  );
}

export async function generateStaticParams() {
  const workouts = await getData<IWorkout[]>(
    "https://api.api-store.workers.dev/api/fitlog",
    { cache: "force-cache" },
  );
  return workouts.map((workout: IWorkout) => ({
    id: workout.id.toString(),
  }));
}

async function WorkoutDetails({ params }: WorkoutDetailasProps) {
  const { id } = await params;
  const workout = await getData<IWorkout>(
    `https://api.api-store.workers.dev/api/fitlog/${id}`,
    { cache: "force-cache" },
  );

  return (
    <Suspense
      fallback={
        <div className="my-50 space-x-3 text-center">
          <span className="mb-2 loading loading-spinner"></span>
          <span className="text-2xl">Loading {workout.name}</span>
        </div>
      }
    >
      <section className="w-11/12 mx-4 sm:mx-0 md:mx-auto my-7 sm:my-20 container flex flex-col lg:flex-row gap-10 items-center justify-center">
        <div className="relative w-full lg:w-170 h-100 sm:h-200 rounded-2xl overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="space-y-7">
          <div className="space-y-3">
            <h1 className="font-brand font-bold uppercase text-3xl sm:text-4xl">
              {workout.name}
            </h1>
            <p className="text-display text-sm sm:text-lg">
              {workout.description}
            </p>
            <div>
              {workout.muscleGroups.map((item: string, index: number) => (
                <span
                  key={index}
                  className="mr-2 px-3 py-1 rounded-full font-semibold bg-brand text-sm text-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <table className="bg-card-500 rounded-2xl border border-b-0 border-collapse border-gray-800 flex flex-col overflow-hidden">
            <tbody>
              <InfoStrip info={workout.equipment} label="equipment" />
              <InfoStrip info={workout.difficulty} label="difficulty" />
              <InfoStrip info={workout.sets} label="sets" />
              <InfoStrip info={workout.reps} label="reps" />
              <InfoStrip info={workout.duration} label="duration" />
              <InfoStrip info={workout.caloriesBurned} label="calories" />
              <InfoStrip info={workout.rating} label="rating" />
            </tbody>
          </table>
          <div>
            <h2 className="font-bold uppercase text-lg">instructions</h2>
            <ol>
              {workout.instructions.map((item: string, index: number) => (
                <li key={index} className="my-2">
                  <span className=" mr-2 text-display text-xm sm:text-base">
                    {index + 1}.
                  </span>
                  <span className="text-mist-300 text-xm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-x-4 space-y-4 sm:space-y-0">
            <AddToPlanButton workout={workout} />
            <SaveForLaterButton workout={workout} />
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default WorkoutDetails;

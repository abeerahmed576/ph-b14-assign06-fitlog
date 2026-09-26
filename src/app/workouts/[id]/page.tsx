import { Metadata } from "next";
import { IWorkout } from "@/types/Workout.type";
import Image from "next/image";
import { Suspense } from "react";
import AddToPlanButton from "@/components/workouts/AddToPlanButton";
import SaveForLaterButton from "@/components/workouts/SaveForLaterButton";

export const metadata: Metadata = {
  title: "Workout Details - Fit Log",
};

interface WorkoutDetailasProps {
  params: {
    id: number;
  };
}

const getWorkout = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

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

async function WorkoutDetails({ params }: WorkoutDetailasProps) {
  const { id } = await params;
  const data: IWorkout = await getWorkout(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
  );

  return (
    <Suspense
      fallback={
        <div className="my-40 space-x-3 text-center">
          <span className="mb-2 loading loading-spinner"></span>
          <span className="text-2xl">Loading {data.name}</span>
        </div>
      }
    >
      <section className="w-11/12 mx-4 sm:mx-0 md:mx-auto my-7 sm:my-20 container flex flex-col lg:flex-row gap-10 items-center justify-center">
        <div className="relative w-full lg:w-170 h-100 sm:h-200 rounded-2xl overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="space-y-7">
          <div className="space-y-3">
            <h1 className="font-brand font-bold uppercase text-3xl sm:text-4xl">
              {data.name}
            </h1>
            <p className="text-display text-sm sm:text-lg">
              {data.description}
            </p>
            <div>
              {data.muscleGroups.map((item: string, index) => (
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
              <InfoStrip info={data.equipment} label="equipment" />
              <InfoStrip info={data.difficulty} label="difficulty" />
              <InfoStrip info={data.sets} label="sets" />
              <InfoStrip info={data.reps} label="reps" />
              <InfoStrip info={data.duration} label="duration" />
              <InfoStrip info={data.caloriesBurned} label="calories" />
              <InfoStrip info={data.rating} label="rating" />
            </tbody>
          </table>
          <div>
            <h2 className="font-bold uppercase text-lg">instructions</h2>
            <div>
              {data.instructions.map((item, index) => (
                <p key={index} className="my-2">
                  <span className=" mr-2 text-display text-xm sm:text-base">
                    {index + 1}.
                  </span>
                  <span className="text-mist-300 text-xm sm:text-base">
                    {item}
                  </span>
                </p>
              ))}
            </div>
          </div>
          <div className="space-x-4 space-y-4 sm:space-y-0">
            <AddToPlanButton data={data} />
            <SaveForLaterButton data={data} />
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default WorkoutDetails;

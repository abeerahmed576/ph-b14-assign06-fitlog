import Image from "next/image";
import { IWorkout } from "@/app/types/Workout.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faStar,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark, faFire, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Suspense } from "react";
import { faInfo, faCheck } from "@fortawesome/free-solid-svg-icons";

interface WorkoutInfoBadgeProps {
  info: number;
  unit?: string;
  icon: IconDefinition;
}

interface CardButtonProps {
  icon: IconDefinition;
  label: string;
  specialClasses: string;
}
// interface WorkoutDetailasProps {
//   params: {
//     id: number;
//   };
// }

const getWorkout = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

function WorkoutInfoBadge({ info, unit, icon }: WorkoutInfoBadgeProps) {
  return (
    <div className="flex gap-1 items-center">
      <FontAwesomeIcon className="size-3.5 text-brand" icon={icon} />{" "}
      <span className="text-sm">
        {info} {unit}
      </span>
    </div>
  );
}

function CardButton({ icon, label, specialClasses }: CardButtonProps) {
  return (
    <button
      className={`btn mr-2 px-3 py-2 font-medium text-xs lg:text-base capitalize rounded-full ${specialClasses ? specialClasses : ""}`}
    >
      <FontAwesomeIcon className="size-3" icon={icon} />
      {label}
    </button>
  );
}

async function MyPlanCard() {
  const data: IWorkout = await getWorkout(
    `https://api.abcz.workers.dev/api/fitlog/1`,
  );

  return (
    <Suspense
      fallback={
        <div className="my-40 space-x-3 text-center">
          <span className="mb-2 loading loading-spinner"></span>
          <span className="text-2xl">Loading your plans</span>
        </div>
      }
    >
      <div className="space-y-4 sm:space-y-0 px-2 md:px-4 py-3 bg-card-600 border border-gray-800 rounded-2xl flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col gap-4 rounded-2xl border border-base-300 sm:flex-row sm:items-center">
          <div className="relative h-30 w-full sm:h-24 sm:w-36 shrink-0 overflow-hidden rounded-2xl ">
            <Image
              className="object-cover"
              src={data.image}
              alt={data.name}
              fill
              loading="lazy"
            />
          </div>
          <div className="ml-2 md:ml-0">
            <h2 className="font-brand font-semibold text-2xl">{data.name}</h2>
            <p className=" text-display text-sm">{data.equipment}</p>
            <div className="space-x-3 mt-4 text-display flex gap-1">
              <WorkoutInfoBadge
                info={data.duration}
                unit="min"
                icon={faClock}
              />
              <WorkoutInfoBadge
                info={data.caloriesBurned}
                unit="kcal"
                icon={faFire}
              />
              <WorkoutInfoBadge info={data.rating} icon={faStar} />
            </div>
          </div>
        </div>
        <div className="space-x-4 min-w-max flex justify-between items-center gap-2">
          <div>
            <CardButton
              icon={faInfo}
              label="view details"
              specialClasses="border border-gray-600 bg-transparent text-display-light"
            />
            <CardButton
              icon={faCheck}
              label="mark as done"
              specialClasses="text-black bg-brand"
            />
          </div>
          <FontAwesomeIcon
            className="mr-2 size-5 text-display cursor-pointer"
            icon={faCircleXmark}
          />
        </div>
      </div>
    </Suspense>
  );
}

export default MyPlanCard;

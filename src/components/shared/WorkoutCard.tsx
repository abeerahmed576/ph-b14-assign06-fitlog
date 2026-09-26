import Image from "next/image";
import { IWorkout } from "@/types/Workout.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faStar,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface WorkoutInfoBadgeProps {
  info: number;
  unit?: string;
  icon: IconDefinition;
}

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

function WorkoutCard({ data }: { data: IWorkout }) {
  return (
    <Link href={`/workouts/${data.id}`}>
      <div className="mx-3 sm:mx-0 border border-gray-800 hover:border-brand rounded-2xl overflow-hidden  relative">
        <div className="relative h-50">
          <Image
            className="object-cover"
            src={data.image}
            alt={data.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            loading="eager"
          />
        </div>
        <div className="p-6 space-y-2 bg-card-500">
          <div>
            {data.muscleGroups.map((item: string, index) => (
              <span
                key={index}
                className="mr-2 px-2 py-0.5 rounded-full font-semibold bg-brand text-sm text-black"
              >
                {item}
              </span>
            ))}
          </div>
          <h2 className="font-brand font-bold text-2xl">{data.name}</h2>
          <p className="pb-4 border-b border-gray-700 text-display text-sm">
            {data.equipment}
          </p>
          <div className="space-x-3 mt-4 text-display flex gap-1">
            <WorkoutInfoBadge info={data.duration} unit="min" icon={faClock} />
            <WorkoutInfoBadge
              info={data.caloriesBurned}
              unit="kcal"
              icon={faFire}
            />
            <WorkoutInfoBadge info={data.rating} icon={faStar} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WorkoutCard;

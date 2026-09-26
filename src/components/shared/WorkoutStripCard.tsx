import Image from "next/image";
import { IWorkout } from "@/types/Workout.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faStar,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark, faFire } from "@fortawesome/free-solid-svg-icons";
import { faInfo, faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext } from "react";
import { CurrentTabContext } from "@/contexts/CurrentTabContext";
import { MyPlanContext } from "@/contexts/MyPlanContext";

interface WorkoutInfoBadgeProps {
  info: number;
  unit?: string;
  icon: IconDefinition;
}

interface WorkoutStringCardProps {
  data: IWorkout;
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

function ViewDetailsButton({ id }: { id: number }) {
  return (
    <Link href={`/workouts/${id}`}>
      <button className="btn mr-2 px-3 py-2 font-medium text-xs lg:text-base capitalize rounded-full border border-gray-600 bg-transparent text-display-light">
        <FontAwesomeIcon className="size-3" icon={faInfo} />
        view details
      </button>
    </Link>
  );
}

function WorkoutStripCard({ data }: WorkoutStringCardProps) {
  const { todaysPlan, setTodaysPlan, savedForLater, setSavedForLater } =
    useContext(MyPlanContext);
  const { currentTab } = useContext(CurrentTabContext);

  const handleRemoveFromPlan = (workout: IWorkout) => {
    if (currentTab === "today")
      setTodaysPlan(
        todaysPlan.filter((item: IWorkout) => item.id !== workout.id),
      );
    else if (currentTab === "saved")
      setSavedForLater(
        savedForLater.filter((item: IWorkout) => item.id !== workout.id),
      );
    // toast.info(`${techInfo.name} removed from Stack.`);
  };

  return (
    <div className="space-y-4 sm:space-y-0 px-2 md:px-4 py-3 bg-card-600 border border-gray-800 rounded-2xl flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="flex flex-col gap-4 rounded-2xl border border-base-300 sm:flex-row sm:items-center">
        <div className="relative h-30 w-full sm:h-24 sm:w-36 shrink-0 overflow-hidden rounded-2xl ">
          <Image
            className="object-cover"
            src={data.image}
            alt={data.name}
            fill
            sizes="144px"
            loading="lazy"
          />
        </div>
        <div className="ml-2 md:ml-0">
          <h2 className="font-brand font-semibold text-2xl">{data.name}</h2>
          <p className="mt-1 text-display text-sm">{data.equipment}</p>
          <div className="space-x-3 mt-3.5 text-display flex gap-1">
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
      <div className="space-x-4 min-w-max flex justify-between items-center gap-2">
        <div>
          <ViewDetailsButton id={data.id} />
          <button
            onClick={() => handleRemoveFromPlan(data)}
            className={`btn mr-2 px-3 py-2 font-medium text-xs lg:text-base capitalize rounded-full text-black bg-brand ${currentTab === "saved" ? "hidden" : ""}`}
          >
            <FontAwesomeIcon className="size-3" icon={faCheck} />
            mark as done
          </button>
        </div>
        <FontAwesomeIcon
          onClick={() => handleRemoveFromPlan(data)}
          className="mr-2 size-5 text-display cursor-pointer"
          icon={faCircleXmark}
        />
      </div>
    </div>
  );
}

export default WorkoutStripCard;

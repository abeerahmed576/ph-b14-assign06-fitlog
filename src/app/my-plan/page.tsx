import Link from "next/link";
import MyPlanCard from "../components/shared/MyPlanCard";

interface PlanInfoProps {
  label: string;
  info: string;
  specialClasses?: string;
}

function PlanInfo({ label, info, specialClasses }: PlanInfoProps) {
  return (
    <li className="space-y-2 flex flex-col flex-1">
      <span className="capitalize text-display text-sm">{label}</span>
      <span
        className={`capitalize font-brand font-semibold text-4xl sm:text-5xl ${specialClasses}`}
      >
        {info}
      </span>
    </li>
  );
}

function MyPlan() {
  return (
    <section className="w-11/12 space-y-7 mx-4 sm:mx-0 md:mx-auto my-7 sm:my-20 container">
      <div className="space-y-2">
        <h2 className="uppercase text-3xl font-brand font-bold">my plan</h2>
        <p className="text-display text-sm sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <ul className="p-6 sm:px-10 py-8 bg-card-600 rounded-2xl border border-mist-800 flex justify-center items-center">
        <PlanInfo label="exercises" info="0" specialClasses="text-brand" />
        <div className="hidden mr-10 w-px h-18 bg-mist-700"></div>
        <PlanInfo label="minutes" info="0" />
        <div className="hidden mr-10 w-px h-18 bg-mist-700"></div>
        <PlanInfo label="calories" info="0" />
      </ul>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="tablist"
          className="w-max p-1 rounded-2xl bg-card-600 border border-mist-700"
        >
          <button
            type="button"
            role="tab"
            className="px-6 py-2.5 text-xs rounded-xl capitalize font-bold text-display-light bg-card-400 border border-mist-700"
          >
            today's plan
          </button>
          <button
            type="button"
            role="tab"
            className="px-6 py-2.5 text-xs rounded-xl capitalize"
          >
            saved
          </button>
        </div>
        <label className="form-control flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-center sm:justify-between w-full max-w-50">
          <span className="label-text min-w-max ml-1 sm:ml-0 sm:mb-0 text-display">
            Sort By
          </span>
          <select className="select rounded-xl">
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>
      <div className="p-10 md:p-30 space-y-8 text-center border border-dashed border-gray-700 rounded-2xl">
        <div className="space-y-2">
          <h1 className="text-2xl font-brand font-bold uppercase">
            nothing here yet
          </h1>
          <p className="text-display">
            Browse the library and add a lift to get today moving.
          </p>
        </div>
        <Link href="/#library">
          <button className="min-w-fit px-10 py-6 sm:py-5 capitalize text-black btn bg-brand rounded-lg">
            browse workouts
          </button>
        </Link>
      </div>
      <MyPlanCard />
    </section>
  );
}

export default MyPlan;

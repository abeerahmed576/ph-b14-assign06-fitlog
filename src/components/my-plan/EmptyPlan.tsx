import Link from "next/link";

function EmptyPlan() {
  return (
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
  );
}

export default EmptyPlan;

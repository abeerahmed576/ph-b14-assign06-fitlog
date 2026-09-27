import { Suspense } from "react";
import WorkoutsContainer from "./homepage/WorkoutsContainer";

function LibraryContainer() {
  return (
    <section
      id="library"
      className="w-11/12 sm:min-w-fit container mx-auto mb-10"
    >
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
        <WorkoutsContainer />
      </Suspense>
    </section>
  );
}

export default LibraryContainer;

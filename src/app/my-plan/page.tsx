import MyPlanStatsContainer from "@/components/MyPlanStatsContainer";
import CurrentTabProvider from "@/contexts/CurrentTabContext";
import TodaysStatsProvider from "@/contexts/TodaysStatsContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Plan - Fit Log",
};

function MyPlan() {
  return (
    <section className="w-11/12 space-y-7 mx-4 sm:mx-0 md:mx-auto my-7 sm:my-20 container">
      <div className="space-y-2">
        <h2 className="uppercase text-3xl font-brand font-bold">my plan</h2>
        <p className="text-display text-sm sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <TodaysStatsProvider>
        <CurrentTabProvider>
          <MyPlanStatsContainer />
        </CurrentTabProvider>
      </TodaysStatsProvider>
    </section>
  );
}

export default MyPlan;

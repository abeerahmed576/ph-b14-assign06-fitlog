import Image from "next/image";
import Hero from "./components/Hero";
import WorkoutContainer from "./components/WorkoutContainer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <WorkoutContainer />
    </main>
  );
}

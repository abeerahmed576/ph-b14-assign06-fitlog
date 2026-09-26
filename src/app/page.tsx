import Image from "next/image";
import Hero from "../components/Hero";
import LibraryContainer from "../components/LibraryContainer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <LibraryContainer />
    </main>
  );
}

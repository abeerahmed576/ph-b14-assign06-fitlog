import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section
      className="
      bg-card-600 rounded-2xl
      container w-11/12 sm:mx-auto mx-4 mt-8 sm:mt-12 mb-8 sm:mb-12 p-8 sm:p-12 lg:p-20
      flex flex-col sm:flex-row justify-between items-center gap-7"
    >
      <div className="space-y-7 text-center sm:text-start">
        <p className="uppercase text-brand tracking-wider font-semibold text-xs">
          workout library
        </p>
        <h1
          className="
        uppercase text-3xl sm:text-4xl md:text-5xl lg:text-7xl
        font-brand font-extrabold"
        >
          train with intent. <br />
          log every set.
        </h1>
        <p className="text-sm sm:text-base text-display md:w-[65%]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>
        <Link href="/#library">
          <button className="w-70 sm:w-fit px-8 py-6 sm:py-5 capitalize text-black btn bg-brand rounded-lg">
            browse workouts
            <FontAwesomeIcon className="size-4" icon={faArrowDown} />
          </button>
        </Link>
      </div>

      <Image
        className="xl:mr-10 md:h-80 md:w-170 lg:h-110 lg:w-110"
        src="/banner.png"
        alt="fitlog banner"
        loading="eager"
        width={334}
        height={334}
      />
    </section>
  );
}

export default Hero;

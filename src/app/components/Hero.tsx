import Image from "next/image";

function Hero() {
  return (
    <div
      className="
      bg-card-600 rounded-2xl
      container sm:mx-auto mx-4 mt-8 mb-8 sm:mt-12 sm:mb-12 p-8 sm:p-20
      flex flex-col sm:flex-row justify-between items-center gap-7"
    >
      <div className="space-y-7 text-center md:text-start">
        <p className="uppercase text-brand tracking-wider font-semibold text-xs">
          workout library
        </p>
        <h1
          className="
        uppercase text-4xl md:text-7xl
        font-brand font-extrabold"
        >
          train with intent. <br />
          log every set.
        </h1>
        <p className="text-display md:w-[65%]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>
        <div className="space-x-4">
          <button className="px-12 sm:px-8 py-6 sm:py-5 capitalize text-black btn bg-brand rounded-lg">
            browse workouts
          </button>
        </div>
      </div>

      <Image
        className="mr-0 sm:mr-5"
        src="/banner.png"
        alt="fitlog banner"
        loading="eager"
        width={334}
        height={334}
      />
    </div>
  );
}

export default Hero;

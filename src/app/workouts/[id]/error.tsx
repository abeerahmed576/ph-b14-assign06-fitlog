"use client";

import Link from "next/link";

function NotFound() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <svg
          viewBox="0 0 320 240"
          className="w-full max-w-sm"
          role="img"
          aria-label="Stylized gym illustration with a barbell"
        >
          <rect width="320" height="240" rx="24" fill="#1A1D23"></rect>
          <rect
            x="24"
            y="24"
            width="272"
            height="192"
            rx="16"
            fill="#0F1115"
            stroke="#2A2E38"
          ></rect>
          <circle
            cx="86"
            cy="120"
            r="34"
            fill="#252830"
            stroke="#C4F000"
            strokeWidth="4"
          ></circle>
          <circle
            cx="234"
            cy="120"
            r="34"
            fill="#252830"
            stroke="#C4F000"
            strokeWidth="4"
          ></circle>
          <rect
            x="112"
            y="112"
            width="96"
            height="16"
            rx="4"
            fill="#C4F000"
          ></rect>
          <rect
            x="48"
            y="104"
            width="14"
            height="32"
            rx="3"
            fill="#E8EAEF"
          ></rect>
          <rect
            x="258"
            y="104"
            width="14"
            height="32"
            rx="3"
            fill="#E8EAEF"
          ></rect>
        </svg>
        <h1 className="text-4xl font-brand font-bold uppercase">
          something went wrong
        </h1>
        <p className="max-w-md text-display">
          Unable to load this workout right now. Please try again.
        </p>
        <button className="min-w-fit px-10 py-6 sm:py-5 capitalize text-black btn bg-brand rounded-lg">
          try again
        </button>
      </div>
    </main>
  );
}

export default NotFound;

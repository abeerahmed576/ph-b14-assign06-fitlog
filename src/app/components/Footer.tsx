import Image from "next/image";
import FitlogLogo from "./shared/FitlogLogo";

function Footer() {
  return (
    <footer className="h-18 sm:h-22 border-t border-t-gray-800">
      <div className="min-h-full p-5 container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <FitlogLogo />
        <p className="text-display text-center">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

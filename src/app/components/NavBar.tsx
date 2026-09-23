import Image from "next/image";
import Link from "next/link";
import FitlogLogo from "./shared/FitlogLogo";

interface NavLinkProps {
  route: string;
  label: string;
}

const NavLink = ({ route, label }: NavLinkProps) => {
  return (
    <Link
      href={route}
      className="px-4 py-1 rounded-full font-medium text-brand bg-brand-shade capitalize"
    >
      {label}
    </Link>
  );
};

interface NavButtonProps {
  label: string;
}

const NavButton = ({ label }: NavButtonProps) => {
  return (
    <button className="btn btn-ghost rounded-full capitalize px-1.5 sm:px-3 text-xs sm:text-base">
      {label}
      <span
        className={`px-2 rounded-full ${label === "plan" ? "bg-brand text-black" : "border border-gray-600 text-display-light"}`}
      >
        0
      </span>
    </button>
  );
};

function NavBar() {
  return (
    <header className="h-18 sm:h-22 border-b border-b-gray-800">
      <nav
        className="
        px-2 sm:px-0
        container min-h-full mx-auto
        flex justify-between items-center"
      >
        <FitlogLogo />
        <ul className="hidden sm:flex gap-5 justify-between items-center">
          <NavLink route="/" label="workouts" />
          <NavLink route="/my-plan" label="my plan" />
        </ul>
        <div className="flex gap-1">
          <NavButton label="plan" />
          <NavButton label="saved" />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

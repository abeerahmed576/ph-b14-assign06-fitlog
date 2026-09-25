import Image from "next/image";
import Link from "next/link";
import FitlogLogo from "./shared/FitlogLogo";
import { faBars, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavLinkProps {
  route: string;
  label: string;
}

interface NavButtonProps {
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

const NavButton = ({ label }: NavButtonProps) => {
  return (
    <button className="btn btn-ghost rounded-full capitalize px-1.5 sm:px-3 text-xs sm:text-base">
      {label}
      <span
        className={`px-1.5 rounded-full ${label === "plan" ? "bg-brand text-black" : "border border-gray-600 text-display-light"}`}
      >
        0
      </span>
    </button>
  );
};

function NavBar() {
  return (
    <header className="h-18 sm:h-20 sticky top-0 z-40 border-b border-base-300 backdrop-blur">
      <nav className="navbar min-h-full container mx-auto px-4">
        <div className="navbar-start gap-2">
          <div className="dropdown lg:hidden">
            <button
              type="button"
              className="btn btn-ghost btn-square"
              aria-label="Open menu"
            >
              <FontAwesomeIcon className="size-5" icon={faBars} />
            </button>
            <ul className="menu dropdown-content menu-sm z-50 mt-3 w-52 rounded-2xl border border-base-300 bg-base-200 p-2">
              <li>
                <a href="/">Workouts</a>
              </li>
              <li>
                <a href="/my-plan">My Plan</a>
              </li>
            </ul>
          </div>
          <FitlogLogo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <NavLink route="/" label="workouts" />
            <NavLink route="/my-plan" label="my plan" />
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <NavButton label="plan" />
          <NavButton label="saved" />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

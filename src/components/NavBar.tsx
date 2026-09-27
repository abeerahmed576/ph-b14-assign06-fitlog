"use client";

import Link from "next/link";
import FitlogLogo from "./shared/FitlogLogo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyPlanContext } from "@/contexts/MyPlanContext";
import { useContext } from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  route: string;
  label: string;
}

interface NavButtonProps {
  label: string;
  count: number;
}

const NavLink = ({ route, label }: NavLinkProps) => {
  const currentPath = usePathname();

  return (
    <Link
      href={route}
      className={`px-4 py-1 rounded-full font-medium capitalize ${route === currentPath ? "text-brand bg-brand-shade" : ""}`}
    >
      {label}
    </Link>
  );
};

const NavButton = ({ label, count }: NavButtonProps) => {
  return (
    <Link href="/my-plan">
      <button className="btn btn-ghost rounded-full capitalize px-1.5 sm:px-3 text-xs sm:text-base">
        {label}
        <span
          className={`px-1.5 rounded-full ${label === "plan" ? "bg-brand text-black" : "border border-gray-600 text-display-light"}`}
        >
          {count}
        </span>
      </button>
    </Link>
  );
};

function NavBar() {
  const { todaysPlan, savedForLater } = useContext(MyPlanContext);

  return (
    <header className="h-18 sm:h-20 sticky top-0 z-40 border-b border-base-300 backdrop-blur">
      <nav className="navbar min-h-full container mx-auto px-4">
        <div className="navbar-start gap-2">
          <div className="dropdown lg:hidden">
            <button
              type="button"
              tabIndex={0}
              className="size-max"
              aria-label="Open menu"
            >
              <FontAwesomeIcon className="size-6 mr-1" icon={faBars} />
            </button>
            <ul className="menu dropdown-content menu-sm z-50 mt-3 w-52 rounded-2xl border border-base-300 bg-base-200 p-2">
              <li>
                <Link className="capitalize" href="/">
                  workouts
                </Link>
              </li>
              <li>
                <Link className="capitalize" href="/my-plan">
                  my plan
                </Link>
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
          <NavButton label="plan" count={todaysPlan.length} />
          <NavButton label="saved" count={savedForLater.length} />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

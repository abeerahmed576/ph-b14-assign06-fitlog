import Image from "next/image";
import Link from "next/link";

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
    <button className="btn btn-ghost rounded-full capitalize">
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
        px-3 sm:px-0
        container min-h-full mx-auto
        flex justify-between items-center"
      >
        <div className="flex gap-2">
          <Image src="/logo.png" alt="fitlog logo" width={24} height={20} />
          <p className="font-bold font-brand uppercase">fitlog</p>
        </div>
        <ul className="flex gap-5 justify-between items-center">
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

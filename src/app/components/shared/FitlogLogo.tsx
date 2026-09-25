import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

function FitlogLogo() {
  return (
    <Link
      className="flex items-center gap-1 font-heading text-xl tracking-wide"
      href="/"
    >
      <FontAwesomeIcon
        className="size-7 rotate-45 text-brand"
        icon={faDumbbell}
      />
      <p className="font-bold font-brand uppercase">fitlog</p>
    </Link>
  );
}

export default FitlogLogo;

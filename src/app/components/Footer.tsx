import Image from "next/image";

function Footer() {
  return (
    <footer className="p-5 container mx-auto flex justify-between">
      <div className="flex gap-2">
        <Image src="/logo.png" alt="fitlog logo" width={24} height={20} />
        <p className="font-bold font-brand uppercase">fitlog</p>
      </div>
      <p className="text-display">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </footer>
  );
}

export default Footer;

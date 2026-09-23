import Image from "next/image";

function FitlogLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.png" alt="fitlog logo" width={24} height={20} />
      <p className="font-bold font-brand uppercase">fitlog</p>
    </div>
  );
}

export default FitlogLogo;

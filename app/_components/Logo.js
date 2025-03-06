import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex items-center">
        <Image
          src="/logo-cabin.png"
          height="80"
          width="80"
          alt="cabin-logo"
          className="bg-black"
        />
        <p className="font-bold">The Wild Oasis</p>
      </Link>
    </div>
  );
};

export default Logo;

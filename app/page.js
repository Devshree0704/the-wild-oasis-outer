import Image from "next/image";
import mainCabin from "@/public/main-cabin.jpg";

export default function Page() {
  return (
    <div>
      <Image
        src={mainCabin}
        fill
        alt="main-cabin"
        quality={80}
        placeholder="blur"
      ></Image>
      <div className="text-white relative z-10 text-center mt-10">
        <h1 className="text-8xl">Welcome to paradice.</h1>
        <button className="bg-[#FBFFE4] mt-10 px-4 py-6 font-bold rounded-full text-[#3D8D7A] cursor-pointer hover:bg-amber-100">
          Explore luxury cabins
        </button>
      </div>
    </div>
  );
}

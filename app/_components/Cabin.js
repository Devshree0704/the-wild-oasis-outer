import PeopleIcon from "@mui/icons-material/People";
import Image from "next/image";
import Link from "next/link";

const Cabin = ({ element }) => {
  return (
    <div className="w-[400px] h-[200px] bg-[#D9B08C] flex border-[#2C3531]  border-2 hover:scale-[1.1] hover:transition duration-700 ease-in-out ">
      <div className="w-[150px] relative h-[196px]">
        <Image
          src={element.image}
          alt={element.name}
          fill
          className="object-cover border-[#2C3531]  border-r-2 "
        />
        ;
      </div>
      <div className="flex flex-col m-2 justify-between pl-4">
        <section className="flex flex-col gap-2">
          <span className="font-bold">Cabin {element.name}</span>
          <span>
            <PeopleIcon />
            <span className="font-semibold pl-2">
              For upto {element.maxCapacity} members
            </span>
          </span>
          <span className="font-semibold">
            Rs. {element.regularPrice}/night
          </span>
        </section>
        <Link
          href={`/cabins/${element.id}`}
          className="hover:text-indigo-800 hover:font-semibold"
        >
          Details & Reservations &rarr;
        </Link>
      </div>
    </div>
    // <div>Cabins</div>
  );
};

export default Cabin;

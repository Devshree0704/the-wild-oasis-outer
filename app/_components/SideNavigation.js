import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";

const SideNavigation = () => {
  return (
    <div className="flex flex-col justify-between pl-4 py-4 ">
      <ul className="flex flex-col gap-y-6 text-[#D1E8E2] font-semibold">
        <li className="hover:bg-[#D9B08C] hover:text-[#2C3531] px-2 py-3 rounded-md flex items-center gap-2">
          <HomeIcon />
          <Link href="/account">Home</Link>
        </li>
        <li className="hover:bg-[#D9B08C] hover:text-[#2C3531] px-2 py-3 rounded-md flex items-center gap-2">
          <CalendarMonthIcon />
          <Link href="/account/reservations">Reservations</Link>
        </li>
        <li className="hover:bg-[#D9B08C] hover:text-[#2C3531] px-2 py-3 rounded-md flex items-center gap-2">
          <PersonIcon />
          <Link href="/account/profile">Guest profile</Link>
        </li>
      </ul>
      <ul>
        <li>Sign out</li>
      </ul>
    </div>
  );
};

export default SideNavigation;

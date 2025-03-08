import SideNavigation from "@/app/_components/SideNavigation";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[10rem_auto] h-full gap-x-10 pb-6">
      <SideNavigation />
      <div className="px-4 pt-5 bg-[#D9B08C] rounded-md">{children}</div>
    </div>
  );
};

export default Layout;

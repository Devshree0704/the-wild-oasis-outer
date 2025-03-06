import Logo from "./Logo";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center mx-8">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Navbar;

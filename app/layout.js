import Navbar from "./_components/Navbar";
import "@/app/_styles/globals.css";

// #3D8D7A
// #B3D8A8
// #FBFFE4
// #A3D1C6
export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid grid-rows-[90px_auto] w-screen h-screen">
        <header className=" relative z-10 text-white">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

import NavbarTop from "@/components/Navbar";
import Sidebarleft from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebarleft />
      <div className="w-full">
        <NavbarTop />
        <div className="p-2 md:p-4 lg:p-8 bg-foreground">{children}</div>
      </div>
    </div>
  );
}

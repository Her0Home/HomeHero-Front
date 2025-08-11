import Link from "next/link";
import { NavMenu } from "./NavigationMenu";
import { routes } from "@/routes";
import NameLogo from "@/components/Logo/logo";

const Navbar = () => {
  return (
    <div className="flex  flex-row justify-between p-3 items-center bg-hero-white border-b-2 border-hero-gray ">
      <div className="border  border-hero-white hover:border-b-hero-orange ">
        <Link className="flex flex-row " href={routes.home}>
          <NameLogo />
        </Link>
      </div>
      <NavMenu />
    </div>
  );
};

export default Navbar;

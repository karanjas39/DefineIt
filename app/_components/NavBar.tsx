import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import ThemeSwitch from "./SwitchTheme";
import Image from "next/image";
import Logo from "@/app/icon.png";

export default function NavBar() {
  return (
    <div className="flex justify-between px-5 py-2">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Website Logo" width={30} />
        <h1 className="sm:text-3xl text-2xl font-bold dark:text-red-700 text-red-800">
          DefineIt
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/favourites">Favourites</Link>
        <ThemeSwitch />
        <a href="https://developerjaskaran.netlify.app/" target="_blank">
          <FaUserAlt />
        </a>
      </div>
    </div>
  );
}

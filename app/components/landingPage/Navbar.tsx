
import Link from "next/link";


import { ThemeToggle } from "../dashboard/ThemeToggle";
import { AuthModal } from "./AuthModal";
export function Navbar() {
  return (
    <div className="relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
      <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-3xl">
            <span className=" font-bold text-primary ">Schedulr</span>
          </h1>
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>

      <nav className="hidden md:flex md:justify-end md:space-x-4">
        <ThemeToggle />

        <AuthModal />
      </nav>
    </div>
  );
}

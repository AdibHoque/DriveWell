import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import {Search} from "lucide-react";
import {Button} from "../ui/button";
import CartButton from "./CartButton";

export const Header = () => {
  return (
    <div className="border-b px-4">
      <div className="w-full flex items-center justify-between wrapper">
        <Link href="/" className="w-36">
          <Image src="/logo.svg" alt="logo" width={80} height={28} />
        </Link>

        <nav className="hidden md:flex-between w-full max-w-xs">
          <NavItems></NavItems>
        </nav>

        <div className="flex gap-2 items-center">
          <CartButton />

          <Button size="icon" variant="ghost">
            <Search />
          </Button>

          <Button variant="default" className="">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

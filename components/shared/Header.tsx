import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import {Search, ShoppingCart} from "lucide-react";
import {Button} from "../ui/button";

export const Header = () => {
  return (
    <div className="border-b">
      <div className="w-full flex items-center justify-between wrapper">
        <Link href="/" className="w-36">
          <Image src="/logo.svg" alt="logo" width={80} height={28} />
        </Link>

        <nav className="hidden md:flex-between w-full max-w-xs">
          <NavItems></NavItems>
        </nav>

        <div className="flex gap-3 items-center">
          <ShoppingCart />
          <Search />
          <Button variant="default" className="">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

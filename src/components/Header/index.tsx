"use client";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Menu, { MenuContent } from "./Menu";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="h-12 w-full flex items-center justify-between px-1 sm:px-4 z-10">
      {pathname !== "/" ? <Link className="sm:hidden" href={"/"}><ArrowLeftIcon className="w-7 h-7 text-white" /></Link> : ""}
        <Logo />
        <Menu />
        <div className="hidden sm:flex">
        <MenuContent />
        </div>
    </div>
  );
}

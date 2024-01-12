"use client";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Menu from "./Menu";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="h-12 w-full flex items-center justify-between px-1">
      {pathname !== "/" ? <Link href={"/"}><ArrowLeftIcon className="w-7 h-7" /></Link> : ""}
        <Logo />
        <Menu />
    </div>
  );
}

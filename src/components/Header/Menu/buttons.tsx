import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href: string
}

export default function Button({ children, href }: ButtonProps) {
  return (
    <Link className="w-full h-12 flex items-center justify-center sm:w-28 hover:text-white hover:scale-110" href={href}>
      <p className="font-bold text-xl">{children}</p>
    </Link>
  );
}

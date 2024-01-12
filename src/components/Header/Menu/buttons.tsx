import Link from "next/link";


interface ButtonProps {
    children: React.ReactNode;
    href: string
}

export default function Button({ children, href }: ButtonProps) {
  return (
    <Link className="w-full h-12 flex items-center justify-center sm:w-28 bg-gray-400 hover:bg-gray/10 hover:text-white" href={href}>
      <p className="font-bold text-xl hover:text-2xl">{children}</p>
    </Link>
  );
}

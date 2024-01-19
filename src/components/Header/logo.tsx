import Link from "next/link";

export default function Logo() {
    return (
        <Link className="text-3xl flex sm:font-4xl gap-1 font-bold font-oswald" href={"/"}>
            VALORANT <p className="text-primary">SPOTLIGHT</p>
        </Link>
    )
}
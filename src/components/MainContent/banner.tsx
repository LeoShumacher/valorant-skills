import Link from "next/link";
import Wellcome from "./welcome";

export default function Banner() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row px-4 items-center gap-2 font-semibold text-xl ">
        <div className="font-oswald text-7xl sm:text-8xl md:text-9xl">
          <p>VALORANT</p>
          <p className="text-primary">SPOTLIGHT</p>
        </div>
      <Wellcome />
      </div>
    </div>
  );
}

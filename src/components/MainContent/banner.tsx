import Link from "next/link";
import Wellcome from "./welcome";

export default function Banner() {
  return (
    <div>
      <div className="grid grid-cols-2 px-4 items-center gap-2 font-semibold text-xl ">
        <div className="font-oswald text-9xl">
          <p>VALORANT</p>
          <p className="text-primary">SPOTLIGHT</p>
        </div>
      <Wellcome />
      </div>
    </div>
  );
}

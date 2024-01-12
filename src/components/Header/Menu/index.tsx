import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Button from "./buttons";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <div className="w-full h-full  absolute left-0 top-0 z-20"><MenuContent /></div>
      ) : (
        <div className="flex sm:hidden" onClick={() => setOpen(!open)}>
          <HamburgerMenuIcon className="w-7 h-7" />
        </div>
      )}
    </>
  );
}
export function MenuContent() {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2">
      <Button href="/agentes">Agentes</Button>
      <Button href="armas">Armas</Button>
      <Button href="mapas">Mapas</Button>
    </div>
  );
}

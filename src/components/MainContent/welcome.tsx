import Link from "next/link";

export default function Wellcome() {
  return (
    <div className="">
      <p>Bem vindo ao VALORANT SPOTLIGHT, aqui você econtrará detalhes sobre</p>
      <Link className="hover:underline font-bold" href={"/agentes"}>agentes</Link>,
      <Link className="hover:underline font-bold" href={"/mapas"}>mapas</Link>,
      <Link className="hover:underline font-bold" href={"/armas"}>armas</Link> e
      <Link className="hover:underline font-bold" href={"/armas"}> skins</Link>.
    </div>
  );
}

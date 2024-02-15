import Link from "next/link";

export default function Wellcome() {
  return (
    <div className="w-58 sm:w-full">
      <p className="text-2xl sm:text-3xl">Bem vindo ao VALORANT SPOTLIGHT, aqui você econtrará detalhes sobre</p>
      <Link className="text-2xl sm:text-3xl hover:underline font-bold" href={"/agentes"}>agentes</Link>,
      <Link className="text-2xl sm:text-3xl hover:underline font-bold" href={"/mapas"}>mapas</Link>,
      <Link className="text-2xl sm:text-3xl hover:underline font-bold" href={"/armas"}>armas</Link> e
      <Link className="text-2xl sm:text-3xl hover:underline font-bold" href={"/armas"}> skins</Link>.
    </div>
  );
}

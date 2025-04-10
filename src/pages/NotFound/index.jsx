//#region imports
import { Link } from "react-router-dom";
import { Separator } from "@/Components/ui/separator";
//#endregion

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#b6cd9f] to-[#367f2d] text-[#1d2b1b] p-8">
      <Separator />
      <div className="text-center max-w-2xl">
        <h1 className="text-[10rem] font-extrabold leading-none">404</h1>
        <p className="text-[2.5rem] font-bold mb-4">
          Opa! Os Chakreiros ainda não carpiram esse lote!
        </p>
        <p className="text-[1.5rem] font-semibold mb-8">
          A página que você procura não foi encontrada. Talvez ela esteja
          tirando um cochilo numa rede...
        </p>
        <Link
          to="/"
          className="inline-block bg-[#1d2b1b] text-white font-nunito px-8 py-4 rounded-full text-[1.5rem] hover:bg-[#2f4f2f] transition-all duration-300"
        >
          Voltar pro início
        </Link>
      </div>

      <div className="mt-16 w-full max-w-md">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzc2NmU1MzZhdTRsNm15MXE2Z3Z3Nmt3eTdoNHBjYzJvN3g5Mm5ubCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/C21GGDOpKT6Z4VuXyn/giphy.gif"
          alt="Pessoa perdida no mato"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </div>
  );
}

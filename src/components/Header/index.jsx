import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import chakreiros from "@/assets/images/chakreiros.png";

export default function Header() {
  return (
    <header className="w-full shadow-sm border-b bg-green_5">
      <div className="flex flex-wrap md:flex-nowrap w-full px-4 py-3 items-center justify-between gap-4">
        <img src={chakreiros} alt="Logo" className="w-40 " />

        <div className="flex max-w-md w-full items-center gap-2 border rounded-full px-4 py-2 shadow-sm bg-green_4">
          <input
            type="text"
            placeholder="Buscar destinos"
            className="w-full outline-none bg-green_4 text-gree_2 font-nunitoSans placeholder:text-green_3"
          />
          <FaSearch className="text-green_3" />
        </div>

        <Button
          variant="outline"
          className="hidden md:flex text-green_1 rounded-xl px-4 py-2 font-nunito font-bold uppercase"
        >
          Anuncie seu espaço
        </Button>
      </div>
    </header>
  );
}

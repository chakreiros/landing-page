import logoChakreiros from "@/assets/images/chakreiros6.png";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex w-full h-fit px-10 py-5 gap-5 justify-between">
      <div className="flex items-center">
        <img src={logoChakreiros} alt="Chakreiros" className="h-24" />
        <h1 className="text-green_2 text-[3.6rem] leading-none">Chakreiros</h1>
      </div>
      <Button
        asChild
        className="w-[20rem] h-[6rem] z-10 rounded-xl text-[2rem] text-white uppercase bg-[#367f2d]
          max-lg:text-[1.6rem] max-lg:h-fit max-lg:py-5"
      >
        <Link to="/spaces">Chácaras</Link>
      </Button>
    </header>
  );
}

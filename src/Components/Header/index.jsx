//#region requirements
import logo from "@/assets/images/Logo.svg";
import banner from "@/assets/images/banner-background.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Menu } from "lucide-react";
//#endregion

export default function Header() {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate("/");
    const feature = document.getElementById(id);
    feature.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`flex flex-col min-h-fit w-full p-10 overflow-hidden shadow-2xl relative bg-(${banner}) bg-no-repeat bg-cover bg-center filter-green-banner`}
    >
      <div className="flex flex-full justify-between">
        <Link to="/">
          <div className="flex">
            <img src={logo} alt="texto Chakreiros" />
          </div>
        </Link>
        <nav className="max-xl:hidden">
          <ul className="flex gap-4 text-[16pt] text-white font-openSansHebrew">
            <li className="flex items-center border-r-4 border-white px-4 m-0">
              <a href="/">HOME</a>
            </li>
            <li className="flex items-center border-r-4 border-white px-4 m-0">
              <span
                className="hover:cursor-pointer"
                onClick={() => handleClick("mc_embed_shell")}
              >
                ANUNCIE
              </span>
            </li>
            <li className="flex items-center border-r-4 border-white px-4 m-0">
              <Link to="/espacos">CHÁCARAS</Link>
            </li>
            <li className="flex items-center px-4 m-0">
              <span
                className="hover:cursor-pointer"
                onClick={() => handleClick("about")}
              >
                SOBRE
              </span>
            </li>
          </ul>
        </nav>
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-16 h-16 text-white" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-green_5 text-green_1">
              <ul className="flex flex-col gap-4 mt-8">
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleClick("mc_embed_shell")}
                  >
                    ANUNCIE
                  </span>
                </li>
                <li>
                  <Link to="/espacos">CHÁCARAS</Link>
                </li>
                <li>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleClick("about")}
                  >
                    SOBRE
                  </span>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <Separator className="w-full max-w-[128.7rem] self-center" />
      <h1 className="font-alata line-clamp-3">
        Com Os Chakreiros
        <br />é Simples Assim
      </h1>
      <div className="flex gap-[3.7rem]">
        <a target="_blank" href="https://form.respondi.app/wHXn04J9">
          <Button
            variant="outline"
            className="w-[29rem] h-[4.2rem] rounded-[7rem] font-nunito text-[2rem] hover:bg-transparent hover:text-white"
          >
            Cadastre-se
          </Button>
        </a>
        <Button
          variant="outline"
          className="w-[29rem] h-[4.2rem] rounded-[7rem] font-nunito text-[2rem] bg-transparent text-white"
          onClick={() => handleClick("glimpse-features")}
        >
          Saiba Mais
        </Button>
      </div>
    </header>
  );
}

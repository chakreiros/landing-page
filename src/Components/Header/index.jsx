import logo from "@/assets/images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/Components/ui/button";

export default function Header() {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate("/");
    const feature = document.getElementById(id);
    feature.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <header className="min-h-fit w-full p-10 overflow-hidden shadow-2xl relative bg-banner bg-no-repeat bg-cover bg-center filter-green-banner">
      <div className="flex flex-full justify-between">
        <Link to="/">
          <div className="flex">
            <img src={logo} alt="texto Chakreiros" />
          </div>
        </Link>
        <nav className=" max-lg:hidden">
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
              <Link to="/spaces">CHÁCARAS</Link>
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
      </div>
      <h1 className="font-alata line-clamp-3">
        Com Os Chakreiros
        <br />é Simples Assim
      </h1>
      <div className="flex gap-[3.7rem]">
        <Button
          variant="outline"
          className="w-[29rem] h-[4.2rem] rounded-[7rem] font-nunito text-[2rem] hover:bg-transparent hover:text-white"
          onClick={() => navigate("/register")}
        >
          Cadastre-se
        </Button>
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

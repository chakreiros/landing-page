import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const year = new Date().getFullYear();

  function handleClick(id) {
    navigate(`/?scrollTo=${id}`);
    const feature = document.getElementById(id);
    feature.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <footer className="w-full bg-green_5 border">
      <div className="w-full flex mx-auto max-w-screen-xl p-4 max-md:flex-col md:justify-between max-xl:items-center">
        <span className=" text-green_1 sm:text-center dark:text-gray-400">
          {year} - Chakreiros. All Rights Reserved
        </span>
        <ul className="flex flex-wrap items-center mt-3 font-medium text-green_1 dark:text-gray-400 sm:mt-0">
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
          <li className="flex items-center border-r-4 border-white px-4 m-0">
            <span
              className="hover:cursor-pointer"
              onClick={() => handleClick("about")}
            >
              SOBRE
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

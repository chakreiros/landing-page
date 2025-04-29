import { Button } from "../ui/button";

export default function Banner() {
  return (
    <div
      id="banner"
      className="h-1/2 p-10 w-full overflow-hidden shadow-2xl relative flex justify-between items-end max-lg:flex-col max-lg:items-center max-lg:gap-10 bg-banner bg-no-repeat bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-[#234c20] bg-opacity-40 bg-center bg-no-repeat bg-cover"></div>
      <p className="relative z-10  pl-32 text-white drop-shadow-sm text-[13.3rem] leading-none  max-lg:text-[4.6rem] font-sans font-regular">
        Dono <br />
        de <span className="font-bold font-sans">Chácara?</span> <br />
        Anuncie
      </p>
      <Button
        asChild
        className="w-[20rem] h-[6rem] z-10 rounded-xl text-[2rem] text-white uppercase bg-[#367f2d]
          max-lg:text-[1.6rem] max-lg:h-fit max-lg:py-5"
      >
        <a
          target="_blank"
          href="https://wa.me/5519991841341?text=Olá!%20Quero%20conhecer%20o%20Chakreiros!"
        >
          Saiba Mais
        </a>
      </Button>
    </div>
  );
}

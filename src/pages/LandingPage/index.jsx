//#region imports
import { FeatureCard, FeatureAccordion } from "@/Components/Features";
import SocialProof from "@/Components/SocialProof";
import Form from "@/Components/Form";
import Header from "@/Components/Header";

import asideDescription from "@/assets/images/pexels-pixabay-2742491.png";
import comecando from "@/assets/images/comecando.svg";
import { Separator } from "@radix-ui/react-separator";
//#endregion
export default function LandingPage() {
  return (
    <div className="flex flex-col gap-40 bg-green_5">
      <Header />
      <main className="w-full flex flex-col gap-40">
        <section
          id="glimpse-features"
          className="h-fit flex flex-col justify-center gap-20"
        >
          <FeatureCard />
        </section>
        <section className="gap-10 flex bg-green_4" id="about">
          <img
            src={asideDescription}
            alt=""
            className="w-1/2 max-h-screen rounded-tr-[2rem] max-lg:hidden object-cover"
          />
          <div className="flex flex-col w-full p-10 bg-right-bottom bg-contain bg-no-repeat max-lg:bg-gradient-to-t from-green_4 to-green_5 max-sm:rounded-xl">
            <h2>
              <img src={comecando} alt="Começando" />
            </h2>
            <div className="h-full flex flex-col justify-evenly ">
              <h3 className=" text-center text-black self-center">
                Os Chakreiros lhe dá Boas-Vindas! <br />
                Mas o que é Chakreiros?
              </h3>
              <p className="max-w-[63.2rem] text-[#1d2b1b] text-justify text-[2rem] self-center">
                Aqui, donos de chácaras encontram uma plataforma simples e
                completa para divulgar seus espaços com profissionalismo,
                enquanto preparamos o catálogo perfeito para quem busca momentos
                inesquecíveis. Nossa missão é transformar locações em
                experiências e trazer praticidade em cada detalhe!
              </p>
            </div>
          </div>
        </section>
        <Separator />
        <SocialProof />

        <FeatureAccordion />
        <Form />
      </main>
    </div>
  );
}

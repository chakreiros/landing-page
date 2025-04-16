//#region imports
//#region components

import CallToActionSection from "@/Components/CallToActionSection";
import { FeatureCard, FeatureAccordion } from "@/Components/Features";
import Form from "@/Components/Form";
import Header from "@/Components/Header";
import WhatsAppWidget from "@/Components/WhatsAppWidget";
//#endregion

//#region images
import asideDescription from "@/assets/images/aside-description.png";
import comecando from "@/assets/images/comecando.svg";
//#endregion
//#endregion
export default function LandingPage() {
  const whatsAppLink =
    "https://api.whatsapp.com/send/?phone=5519991841341&text=Eu quero ser um Chakreiro!";
  return (
    <div className="flex flex-col gap-40 bg-green_5">
      <Header />

      <main className="w-full flex flex-col gap-40">
        <CallToActionSection
          text="Quero ser um Chakreiro!"
          link={whatsAppLink}
          external
        />
        <section
          id="glimpse-features"
          className="h-fit flex flex-col justify-center gap-20"
        >
          <FeatureCard />
        </section>
        <CallToActionSection
          text="Conheça todos os Chakreiros!"
          link="/spaces"
        />
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
              </h3>
              <h4>mas o que é Chakreiros?</h4>
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
        <FeatureAccordion />
        <h3 className="m-auto">Com dúvidas?</h3>
        <CallToActionSection text="Fale conosco" link="/register" />
        <Form />
      </main>
      <WhatsAppWidget whatsAppLink={whatsAppLink} />
    </div>
  );
}

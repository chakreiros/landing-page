//#region imports
//#region components

import FAQAccordion from "@/Components/FAQAccordion";
import { FeatureCard } from "@/Components/Features";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import WhatsAppWidget from "@/Components/WhatsAppWidget";
//#endregion

//#region images
import asideImage from "@/assets/images/aside-image.svg";
import asideImage2 from "@/assets/images/aside-image2.svg";
import asideImage3 from "@/assets/images/aside-image3.svg";
import solucao from "@/assets/images/solucao.svg";
import problemas from "@/assets/images/problemas.svg";
import quemSomos from "@/assets/images/quemsomos.svg";
import pagamentoAutomatico from "@/assets/images/pagamento-automatico.svg";
import cadastreSeuEspaco from "@/assets/images/cadastre-seu-espaco.svg";
import comunicacaoComClientes from "@/assets/images/comunicacao-com-clientes.svg";
import CallToActionSection from "@/Components/CallToActionSection";
import ellipse from "@/assets/images/Ellipse1.svg";
import ellipse2 from "@/assets/images/Ellipse2.svg";
//#endregion
//#endregion
export default function LandingPage() {
  const whatsAppLink =
    "https://api.whatsapp.com/send/?phone=5519991841341&text=Eu quero ser um Chakreiro!";

  return (
    <>
      <div className="flex flex-col bg-green_5">
        <Header />

        <main className="w-full flex flex-col bg-green_6">
          <CallToActionSection
            text="ENCONTRAR CHÁCARA!"
            link="/espacos"
            className="mt-[4.6rem]"
          />
          {/*Glimpse Features*/}
          <section
            id="glimpse-features"
            className="h-full max-h-[50vh] my-[4.6rem]"
          >
            <FeatureCard />
          </section>
          {/* About */}
          <section className="flex bg-green_4" id="about">
            <div className="flex flex-col w-full p-10 bg-right-bottom bg-contain bg-no-repeat to-green_4 max-sm:rounded-xl">
              <h2 className="self-end">
                <img src={quemSomos} alt="Começando" />
              </h2>
              <div className="h-full flex flex-col justify-evenly ">
                <h2 className="text-black font-abhaya font-extrabold">
                  Os Chakreiros lhe dá Boas-Vindas! <br />
                </h2>
                <p className="max-w-[63.2rem] text-[#1d2b1b] text-justify text-[2rem] self-center">
                  Nós somos os Chakreiros — uma plataforma criada por quem
                  conhece, na prática, os desafios de alugar chácaras e espaços
                  de lazer. Nascemos com o propósito de transformar essa
                  experiência em algo simples, seguro e eficiente, tanto para o
                  locador quanto para o locatário. Nossa missão é clara:
                  eliminar as dores da gestão de aluguel, profissionalizar o
                  mercado e devolver ao proprietário aquilo que ele realmente
                  quer — mais lucro, menos estresse e total controle do seu
                  espaço.
                </p>
              </div>
            </div>
            <img
              src={asideImage}
              alt="aside description"
              className="w-1/2 max-h-screen rounded-l-[2rem] max-lg:hidden object-cover"
            />
          </section>
          <section className="flex bg-green_6" id="problems">
            <img
              src={asideImage2}
              alt="aside description"
              className="w-1/2 max-h-screen rounded-r-[2rem] max-lg:hidden object-cover"
            />
            <div className="w-full flex flex-col p-10 bg-right-bottom bg-contain bg-no-repeat bg-green_6 max-sm:rounded-xl">
              <h2>
                <img src={problemas} alt="Problemas" />
              </h2>
              <div className="h-full flex flex-col justify-evenly ">
                <h2 className="text-black font-abhaya font-extrabold">
                  O que torna a locação de espaços de chácaras? <br />
                </h2>
                <p className="max-w-[63.2rem] text-[#1d2b1b] text-justify text-[2rem] self-center">
                  Mensagens desencontradas, pagamentos inseguros, datas
                  sobrepostas e manutenção desorganizada transformam o que era
                  para ser renda extra em dor de cabeça. Repetição de
                  informações, desistências de última hora e prejuízos com danos
                  são parte da rotina — e você merece uma solução melhor.
                </p>
              </div>
            </div>
          </section>
          <section className="flex bg-green_4" id="solution">
            <div className="flex flex-col w-full p-10 bg-right-bottom bg-contain bg-no-repeat bg-green_4 max-sm:rounded-xl">
              <h2 className="self-start">
                <img src={solucao} alt="Solução" />
              </h2>
              <div className="h-full flex flex-col justify-evenly items-center">
                <h2 className="text-black font-abhaya font-extrabold leading-none">
                  Transformamos a sua gestão em um processo simples e eficiente.
                </h2>
                <p className="max-w-[63.2rem] text-[#1d2b1b] text-justify text-[1.8rem]">
                  O Chakreiros nasceu para facilitar a vida de quem aluga
                  chácaras e espaços de lazer. Com uma plataforma feita sob
                  medida, você centraliza a comunicação com clientes, evita
                  mensagens perdidas e ligações fora de hora. <br />
                  Receba com segurança e pontualidade, com contratos digitais e
                  reservas protegidas. Gerencie sua agenda com um calendário
                  inteligente e visualize sua receita com clareza. Além disso,
                  automatize manutenções com checklists e acione prestadores de
                  confiança sempre que precisar.
                </p>
              </div>
            </div>
            <img
              src={asideImage3}
              alt="aside description"
              className="w-1/2 max-h-screen rounded-l-[2rem] max-lg:hidden object-cover"
            />
          </section>

          {/* sessão Como funciona */}
          <section
            className="flex flex-col w-full h-fit gap-[4.6rem] p-[2rem] items-center justify-center"
            id="how works"
          >
            <div className="flex flex-col items-center">
              <h2 className="font-roboto text-black">Como Funciona</h2>
              <p className="font-roboto font-light text-[2rem] text-center">
                Comece a transformar sua chácara <br />
                em um negócio lucrativo em apenas 3 passos
              </p>
            </div>

            <div className="gap-[2rem] flex flex-col w-full justify-center items-center md:flex-row md:justify-evenly">
              <div className="flex flex-col w-fit items-center gap-[1rem]">
                <img src={pagamentoAutomatico} alt="Pagamento automático" />
                <h3 className="font-roboto font-semibold text-[1.6rem] text-green_7">
                  Pagamentos automáticos
                </h3>
                <p className="w-fit max-w-[31.8rem] text-center font-light text-[1.4rem] text-[#423D3D]">
                  Com o Chakreiros, você não precisa mais se preocupar com a
                  parte financeira. Nosso sistema gerencia todo o processo de
                  reserva, desde a consulta inicial até o pagamento final. Os
                  valores são depositados diretamente na sua conta, com total
                  segurança e transparência.
                </p>
              </div>

              <img
                className="hidden md:block sm:max-w-[25rem]"
                src={ellipse}
                alt="seta"
              />

              <div className="flex flex-col w-fit items-center gap-[1rem]">
                <img src={cadastreSeuEspaco} alt="Pagamento automático" />
                <h3 className="font-roboto font-semibold text-[1.6rem] text-green_7">
                  Cadastre seu espaço
                </h3>
                <p className="w-fit max-w-[31.8rem] text-center font-light text-[1.4rem] text-[#423D3D]">
                  Nosso processo de cadastro foi simplificado ao máximo. Você só
                  precisa fornecer as informações básicas, adicionar algumas
                  fotos de qualidade e definir suas regras e valores. Nossa
                  equipe está disponível para ajudar em cada etapa, garantindo
                  que seu espaço seja apresentado da melhor forma possível.
                </p>
              </div>

              <img
                className="hidden md:block sm:max-w-[25rem]"
                src={ellipse2}
                alt="seta2"
              />

              <div className="flex flex-col w-fit items-center gap-[1rem]">
                <img src={comunicacaoComClientes} alt="Pagamento automático" />
                <h3 className="font-roboto font-semibold text-[1.6rem] text-green_7">
                  Cadastre seu espaço
                </h3>
                <p className="w-fit max-w-[31.8rem] text-center font-light text-[1.4rem] text-[#423D3D]">
                  Nosso processo de cadastro foi simplificado ao máximo. Você só
                  precisa fornecer as informações básicas, adicionar algumas
                  fotos de qualidade e definir suas regras e valores. Nossa
                  equipe está disponível para ajudar em cada etapa, garantindo
                  que seu espaço seja apresentado da melhor forma possível.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col w-full h-full p-[2.5rem]">
            <h2 className="font-urbanist font-semibold text-[3.6rem] text-[#5f5e5b]">
              FAQ - Perguntas Frequentes
            </h2>
            <FAQAccordion />
          </section>
        </main>
        <Footer />
      </div>
      <WhatsAppWidget whatsAppLink={whatsAppLink} />
    </>
  );
}

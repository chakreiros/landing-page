//#region imports
import React from "react";

//#region ui components
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/Components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
//#endregion

//#region icons
import { MdAnnouncement } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { PiRobotFill } from "react-icons/pi";
import { FaCamera } from "react-icons/fa";

//#endregion
//#endregion

const features = [
  {
    id: "announcement",
    icon: "MdAnnouncement",
    title: "Plataforma simples",
    description:
      "Nossa plataforma foi desenvolvida para ser intuitiva e de fácil navegação, proporcionando uma experiência agradável e eficiente para os usuários. Com um design moderno e limpo, os visitantes podem encontrar rapidamente o que procuram sem complicações. As funcionalidades são dispostas de maneira lógica e acessível, garantindo que até mesmo aqueles com menos familiaridade com tecnologia possam utilizá-la sem dificuldades.",
  },
  {
    id: "chatbot",
    icon: "PiRobotFill",
    title: "Bot de atendimento",
    description:
      "Nosso bot de atendimento está sempre disponível para oferecer suporte e esclarecer dúvidas. Programado com inteligência artificial avançada, ele é capaz de entender e responder às perguntas mais frequentes dos usuários de maneira rápida e precisa. Além disso, ele pode direcionar os visitantes para os recursos ou informações específicos de que precisam, melhorando significativamente a experiência do usuário e reduzindo o tempo de espera por suporte humano.",
  },
  {
    id: "photos",
    icon: "FaCamera",
    title: "Fotos e vídeos profissionais",
    description:
      "A qualidade visual do seu conteúdo faz toda a diferença. Por isso, nossa landing page conta com fotos e vídeos profissionais que destacam o melhor do seu produto ou serviço. Cada imagem e vídeo é escolhido e produzido com cuidado, garantindo uma apresentação elegante e atraente. Isso não só melhora a estética do seu site, mas também ajuda a transmitir a credibilidade e o profissionalismo da sua marca.",
  },
  {
    id: "schedule-control",
    icon: "AiFillSchedule",
    title: "Agenda automatizada",
    description:
      "Simplifique a gestão de compromissos com nossa agenda automatizada. Esse recurso permite que os usuários marquem consultas, reuniões ou eventos de maneira simples e rápida, diretamente pela página. A integração com sistemas de calendário garante que todos os agendamentos sejam sincronizados automaticamente, evitando conflitos e facilitando o gerenciamento do seu tempo. A confirmação instantânea e os lembretes automáticos ajudam a reduzir ausências e atrasos, garantindo uma operação mais eficiente.",
  },
];

export function FeatureCard() {
  const iconComponents = {
    MdAnnouncement,
    AiFillSchedule,
    PiRobotFill,
    FaCamera,
  };

  function handleCardClick(id) {
    const feature = document.getElementById(id);
    feature.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="cards-wrapper flex max-md:flex-col gap-[2rem] items-center justify-center max-lg:flex-wrap max-lg:gap-[6rem] max-xl:p-10 max-md:p-0">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="flex flex-col items-center w-1/3 max-w-[60rem] max-md:w-[75vw] h-[20rem] shadow-2xl hover:scale-105 ease-in-out duration-300 border-[#41693c] rounded-xl"
        >
          <CardTitle className="border border-[#41693c] relative rounded-full p-4 -top-14 bg-white">
            {React.createElement(iconComponents[feature.icon], {
              size: "3em",
              color: "#41693c",
            })}
          </CardTitle>
          <CardContent className="text-[1.6rem] leading-normal uppercase text-[#41693c] font-extrabold text-center">
            {feature.title}
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="border border-[#41693c] rounded-full uppercase text-[#41693c] font-bold text-lg"
              onClick={() => handleCardClick(feature.id)}
            >
              Saiba Mais
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export function FeatureAccordion() {
  return (
    <section id="features" className="px-20">
      {features.map((feature, index) => (
        <Accordion key={index} type="single" collapsible className="w-full">
          <AccordionItem value={`item-${index}`} id={feature.id}>
            <AccordionTrigger>
              <p className="whitespace-nowrap w-[75vw] overflow-hidden overflow-ellipsis text-left text-[2.6rem]">
                {feature.title}
              </p>
            </AccordionTrigger>
            <AccordionContent id="AccordionContent">
              {feature.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
}

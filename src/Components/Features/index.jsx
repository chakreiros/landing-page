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
      "Nossa plataforma está sendo desenvolvida para ser intuitiva e de fácil navegação, proporcionar uma experiência agradável e simples.",
  },
  {
    id: "chatbot",
    icon: "PiRobotFill",
    title: "Controle de atendimento",
    description:
      "Nossa equipe de atendimento está sempre disponível para oferecer suporte e esclarecer dúvidas. Respondemos às perguntas mais frequentes dos usuários de maneira rápida e precisa. Além disso, direcionamos os visitantes para os recursos ou informações específicos de que precisam, melhorando significativamente a experiência do usuário e reduzindo o tempo de espera por suporte humano e do proprietário.",
  },
  // {
  //   id: "photos",
  //   icon: "FaCamera",
  //   title: "Fotos e vídeos profissionais",
  //   description:
  //     "A qualidade visual do seu conteúdo faz toda a diferença. Por isso, nossa landing page conta com fotos e vídeos profissionais que destacam o melhor do seu produto ou serviço. Cada imagem e vídeo é escolhido e produzido com cuidado, garantindo uma apresentação elegante e atraente. Isso não só melhora a estética do seu site, mas também ajuda a transmitir a credibilidade e o profissionalismo da sua marca.",
  // },
  {
    id: "schedule-control",
    icon: "AiFillSchedule",
    title: "Gestão dedicada",
    description:
      "Simplifique a gestão de compromissos com sua agenda gerenciada por nós. Esse recurso permite que os usuários marquem consultas, reuniões ou eventos de maneira simples e rápida, apenas entrando em contato com os Chakreiros.",
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
    <div className="cards-wrapper flex h-[50vh] max-md:flex-col gap-[2rem] items-center justify-center max-lg:flex-wrap max-lg:gap-[6rem] max-xl:p-10 max-md:p-0 m-40">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="flex flex-col items-center justify-evenly w-1/3 max-w-[22.4rem] max-md:w-[75vw] h-[20rem] shadow-2xl hover:scale-105 hover:cursor-pointer ease-in-out duration-300 bg-green_3 rounded-[3rem]"
          onClick={() => handleCardClick(feature.id)}
        >
          <CardTitle className=" p-4 -top-14">
            {React.createElement(iconComponents[feature.icon], {
              size: "3em",
              color: "#f1f7db",
            })}
          </CardTitle>
          <CardContent className="text-[1.6rem] leading-normal uppercase text-green_5 font-extrabold text-center">
            {feature.title}
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="rounded-full uppercase text-[#41693c] font-bold text-lg"
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
              <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis text-left font-alata">
                {feature.title}
              </h3>
            </AccordionTrigger>
            <AccordionContent
              className="max-w-[80vw] text-justify font-nunito text-[1.3em]"
              id="AccordionContent"
            >
              {feature.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
}

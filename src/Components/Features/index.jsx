//#region imports
import React from "react";

//#region ui components
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
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
import { BiSolidMedal } from "react-icons/bi";
//#endregion
//#endregion

const features = [
  {
    id: "Problems",
    icon: "MdAnnouncement",
    title: "Problemas",
    description:
      "Nossa plataforma está sendo desenvolvida para ser intuitiva e de fácil navegação, proporcionar uma experiência agradável e simples.",
  },
  {
    id: "chatbot",
    icon: "PiRobotFill",
    title: "Como funciona",
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
    icon: "BiSolidMedal",
    title: "Planos",
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
    BiSolidMedal,
  };

  function handleCardClick(id) {
    const feature = document.getElementById(id);
    feature.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Carousel className="cards-wrapper max-h-[50vh] h-full flex items-center justify-center gap-[4.2rem] max-lg:px-10 max-lg:gap-10">
      <CarouselContent>
        {features.map((feature, index) => (
          <CarouselItem key={index} className="basis-0/1">
            <Card
              key={index}
              className="flex flex-col items-center justify-evenly h-fit w-fit p-5 hover:opacity-75 hover:cursor-pointer ease-in-out duration-300 bg-green_3 rounded-[3rem]"
              onClick={() => handleCardClick(feature.id)}
            >
              <CardTitle className=" p-4 -top-14">
                {React.createElement(iconComponents[feature.icon], {
                  size: "3em",
                  color: "#f1f7db",
                })}
              </CardTitle>
              <CardContent className="w-max text-[1.8rem] tracking-[.6rem] leading-normal uppercase text-green_5 font-extrabold text-center">
                {feature.title}
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="rounded-[4rem] px-[4rem] py-[1.6rem] uppercase text-green_2 text-[2rem] font-nunito leading-none"
                >
                  Saiba Mais
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export function FeatureAccordion() {
  return (
    <section id="features" className="px-20 max-sm:px-6">
      {features.map((feature, index) => (
        <Accordion key={index} type="single" collapsible className="w-full">
          <AccordionItem value={`item-${index}`} id={feature.id}>
            <AccordionTrigger>
              <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis text-left  text-5xl">
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

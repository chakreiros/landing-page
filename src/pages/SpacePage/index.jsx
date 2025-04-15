//#region imports
import React from "react";
import { useParams } from "react-router-dom";

import Autoplay from "embla-carousel-autoplay";

import Header from "@/Components/Header";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";

import cardData from "@/utils/cardData";

import { FaCheck } from "react-icons/fa";
import { MdBlock, MdOutlinePets } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Separator } from "@/Components/ui/separator";
import Footer from "@/Components/Footer";
import WhatsAppWidget from "@/Components/WhatsAppWidget";
//#endregion

export default function SpacePage() {
  const params = useParams();

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const data = cardData[params.id];
  const info = data.info;

  const whatsAppLink = `https://api.whatsapp.com/send/?phone=5519991841341&text=Chakreiros! Quero saber mais sobre a ${data.title}`;

  const blocks = info.description
    .trim()
    .split(/\n\s*\n/) // quebra por parágrafos
    .map((block, index) => {
      const lines = block
        .trim()
        .split("\n")
        .map(line => line.trim());

      const isList = lines.every(line => line.includes(":"));

      if (isList) {
        return (
          <ul key={index} className="list-disc list-inside my-2">
            {lines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        );
      }

      return (
        <p key={index} className="my-2">
          {lines.join(" ")}
        </p>
      );
    });

  return (
    <>
      <Header />
      <main className="h-fit m-40 max-sm:m-0 mb-[10rem]">
        <div className="flex gap-10 px-10 items-center">
          <img className="rounded-full w-[10rem]" src={data.logo} />
          <h1 className="font-alata font-bold text-green_1">
            {data.title} - {data.category}
          </h1>
        </div>
        <Carousel
          ref={plugin}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {data.images.map((image, index) => (
              <CarouselItem key={index} className="xl:basis-1/3">
                <img src={image} alt={data.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex gap-10 max-md:flex-col mb-[10rem]">
          <section className="border border-gray rounded-xl m-10 p-10 w-fit max-w-[50vw] max-md:max-w-full flex-wrap">
            <div>
              <h2>Informações</h2>
              <ul>
                <li className="flex flex-rows items-center gap-4">
                  Área: {info.size}
                </li>
                <li className="flex flex-rows items-center gap-4">
                  {info.hosting ? (
                    <FaCheck />
                  ) : (
                    <MdBlock className="text-red-500" />
                  )}
                  Hospedagem
                </li>
                <li className="flex flex-rows items-center gap-4">
                  Capacidade para eventos: {info.event_capacity}
                </li>
                <li className="flex flex-rows items-center gap-4">
                  Localidade:
                  <a
                    className="hover:'underline"
                    target="_blank"
                    href={info.locality[1]}
                  >
                    {info.locality[0]}
                  </a>
                </li>
                <li className="flex flex-rows items-center gap-4">
                  {info.furniture ? (
                    <FaCheck />
                  ) : (
                    <MdBlock className="text-red-500" />
                  )}
                  Mobília no local
                </li>
                <li className="flex flex-rows items-center gap-4">
                  {info.barbecue_area ? (
                    <FaCheck />
                  ) : (
                    <MdBlock className="text-red-500" />
                  )}
                  Área de churrasco
                </li>
                <li className="flex flex-rows items-center gap-4">
                  {info.cooking_area ? (
                    <FaCheck />
                  ) : (
                    <MdBlock className="text-red-500" />
                  )}
                  Cozinha
                </li>
                <li className="flex flex-rows items-center gap-4">
                  {info.pool.havePool ? (
                    <FaCheck />
                  ) : (
                    <MdBlock className="text-red-500" />
                  )}
                  Piscina -{info.pool.size}
                </li>
                <li className="flex flex-rows items-center gap-4">
                  {info.playground ? (
                    <FaCheck />
                  ) : (
                    <MdBlock className="text-red-500" />
                  )}
                  Playground
                </li>
                <li className="flex flex-rows items-center gap-4">
                  {info.wifi ? (
                    <FaCheck />
                  ) : (
                    <MdBlock className="text-red-500" />
                  )}
                  Wi-fi
                </li>
                <li className="flex flex-rows items-center gap-4">
                  {info.pet ? (
                    <MdOutlinePets />
                  ) : (
                    <MdBlock className="text-red-500" />
                  )}
                  {info.pet ? "Permitido animais" : "Proibido animais"}
                </li>
              </ul>
            </div>
            <Separator />
            <div>
              <h2>Contatos</h2>
              <ul>
                <li className="flex flex-rows items-center gap-4">
                  {info.whatsApp ? (
                    <IoLogoWhatsapp />
                  ) : (
                    <MdBlock className="text-red-500" />
                  )}
                  {info.whatsApp ? (
                    <a
                      className="hover:underline"
                      target="_blank"
                      href={whatsAppLink}
                    >
                      Chamar via WhatsApp
                    </a>
                  ) : (
                    "Sem WhatsApp"
                  )}
                </li>
                <li className="flex flex-rows items-center gap-4">
                  {info.instagram ? (
                    <AiFillInstagram />
                  ) : (
                    <MdBlock className="text-red-500" />
                  )}
                  {info.instagram ? (
                    <a
                      className="hover:underline"
                      target="_blank"
                      href={`https://ig.me/m/chakreiros`}
                    >
                      @chakreiros
                    </a>
                  ) : (
                    "Sem Instagram"
                  )}
                </li>
              </ul>
            </div>
            <Separator />

            <div>
              <h2>Descrição</h2>
              <div className="text-justify">{blocks}</div>
            </div>
          </section>
          <section className="w-[90vw] h-[50vh] flex flex-col gap-5 p-6 m-6">
            <div
              className="self-center w-full border border-black-1 p-10 rounded-[1rem] shadow-lg"
              dangerouslySetInnerHTML={{ __html: data.locality_tag }}
            ></div>
            <div
              className="h-fit flex items-center max-md:w-full border border-black-1 p-10 rounded-[1rem] shadow-lg"
              dangerouslySetInnerHTML={{ __html: data.scheduler_tag }}
            ></div>
          </section>
        </div>
        <WhatsAppWidget whatsAppLink={whatsAppLink} />
      </main>
      <Footer />
    </>
  );
}

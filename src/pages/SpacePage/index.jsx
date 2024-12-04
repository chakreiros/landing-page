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
//#endregion

export default function SpacePage() {
  const params = useParams();

  const data = cardData[params.id];
  const info = data.info;

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <>
      <div className="shadow">
        <Header />
      </div>
      <main className="my-10">
        <div className="flex gap-10 px-10 items-center">
          <img className="rounded-full w-[10rem]" src={data.logo} />
          <h1>
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

        <div className="flex gap-10 max-sm:flex-col">
          <section className="border border-gray rounded-xl m-10 p-10 w-fit max-w-[50vw] max-md:max-w-full">
            <h2>Informações</h2>
            <ul>
              <li>Área: {info.size}</li>
              <li>Capacidade de hospedagem: {info.host_capacity}</li>
              <li>Capacidade para eventos: {info.event_capacity}</li>
              <li>
                Localidade:
                <a
                  className="hover:'underline"
                  target="_blank"
                  href={info.locality[1]}
                >
                  {info.locality[0]}
                </a>
              </li>
              <li>
                {info.furniture ? <FaCheck /> : <MdBlock />}Mobília no local
              </li>
              <li>
                {info.barbecue_area ? <FaCheck /> : <MdBlock />}Área de
                churrasco
              </li>
              <li>{info.cooking_area ? <FaCheck /> : <MdBlock />}Cozinha</li>
              <li>
                {info.pool.havePool ? <FaCheck /> : <MdBlock />}Piscina -
                {info.pool.size}
              </li>
              <li>{info.playground ? <FaCheck /> : <MdBlock />}Playground</li>
              <li>{info.wifi ? <FaCheck /> : <MdBlock />}Wi-fi</li>
              <li>
                {info.pet ? <MdOutlinePets /> : <MdBlock />}
                {info.pet ? "Permitido animais" : "Proibido animais"}
              </li>
            </ul>
            <div className="border-b">
              <h3>Descrição</h3>
              <p> {info.description}</p>
            </div>
            <div>
              <h3>Contatos</h3>
              <ul>
                <li>
                  {info.whatsApp ? <IoLogoWhatsapp /> : <MdBlock />}
                  {info.whatsApp ? (
                    <a
                      className="hover:underline"
                      target="_blank"
                      href={`https://api.whatsapp.com/send/?phone=55${info.whatsApp}`}
                    >
                      {info.whatsApp}
                    </a>
                  ) : (
                    "Sem WhatsApp"
                  )}
                </li>
                <li>
                  {info.instagram ? <AiFillInstagram /> : <MdBlock />}
                  {info.instagram ? (
                    <a
                      className="hover:underline"
                      target="_blank"
                      href={`https://www.instagram.com/${info.instagram}/`}
                    >
                      @{info.instagram}
                    </a>
                  ) : (
                    "Sem Instagram"
                  )}
                </li>
              </ul>
            </div>
          </section>
          <section className="border border-gray rounded-xl m-10 p-10 w-fit max-w-[50vw]">
            <div className="w-[50vw] h-full flex items-center">
              <h3 className="w-full text-center">Agenda em breve disponível</h3>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

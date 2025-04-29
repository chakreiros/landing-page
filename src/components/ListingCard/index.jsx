import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { FaCheck } from "react-icons/fa";

import cardData from "@/utils/cardData";

export default function ListingCard() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full px-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          onClick={() => navigate(`/spaces/${index}`)}
          className="hover:scale-[1.02] cursor-pointer transition-transform rounded-xl shadow-md"
        >
          <CardHeader className="p-0">
            <Carousel className="w-fit h-full">
              <Carousel className="relative w-full">
                <CarouselContent>
                  {card.images.map((src, index) => (
                    <CarouselItem key={index}>
                      <img
                        className="w-full rounded-xl"
                        src={src}
                        alt={`Imagem ${index + 1}`}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Botões de navegação */}
                <button className="absolute z-1 top-1/2 left-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
                  ‹
                </button>
                <button className="absolute z-1 top-1/2 right-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
                  ›
                </button>
              </Carousel>

              {/* Indicadores manuais (dots) */}
              <div className="flex justify-center gap-2 mt-2">
                {card.images.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-green_4 opacity-50"
                  />
                ))}
              </div>
            </Carousel>
          </CardHeader>

          <CardTitle className="text-green_1 text-center font-semibold mt-4">
            {card.title}
          </CardTitle>

          <CardContent>
            <ul className="flex flex-col rounded-xl shadow-sm p-10">
              {/* Localidade sem FaCheck */}
              <li>
                <strong>{card.info.locality[0].split("-")[1]}</strong>
              </li>

              {/* Itens condicionais padronizados */}
              {card.info.size && <InfoItem text={`Área: ${card.info.size}`} />}
              {card.info.pool.havePool && (
                <InfoItem text={`Piscina - ${card.info.pool.size}`} />
              )}
              {card.info.hosting && (
                <InfoItem
                  text={`Hospedagem | Para eventos: ${card.info.event_capacity}`}
                />
              )}

              {[
                { key: "furniture", label: "Mobília no local" },
                { key: "barbecue_area", label: "Área de churrasco" },
                { key: "cooking_area", label: "Cozinha" },
                { key: "playground", label: "Playground" },
                { key: "wifi", label: "Wi-fi" },
              ]
                .filter(({ key }) => card.info[key])
                .map(({ key, label }) => (
                  <InfoItem key={key} text={label} />
                ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function InfoItem({ text }) {
  return (
    <li className="flex items-center gap-2 ">
      <FaCheck className="text-green_3" />
      {text}
    </li>
  );
}

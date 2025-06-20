//#region imports
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";
//#region images
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";

import cardData from "@/utils/cardData";

//#endregion
//#endregion
export default function CardList() {
  const navigate = useNavigate();

  return (
    <div className="flex max-xl:flex-wrap gap-10 w-[50rem]">
      {cardData &&
        cardData.map((card, index) => (
          <Card
            onClick={() => navigate(`/espacos/${index}`)}
            className="w-full min-w-[25rem] max-w-[25vw] h-auto max-h-fit rounded-xl m-auto hover:scale-105 hover:cursor-pointer ease-in-out duration-150 shadow-md"
            key={index}
          >
            <CardHeader>
              <Carousel className="w-fit h-full">
                <CarouselContent>
                  {Array.from({ length: card.images.length }).map(
                    (_, index) => (
                      <CarouselItem key={index}>
                        <div>
                          <img
                            className="max-w-1/3 max-lg:max-w-full rounded-xl"
                            src={card.images[index]}
                            alt={`image-0${index + 1} de ${card.title}`}
                          />
                        </div>
                      </CarouselItem>
                    ),
                  )}
                </CarouselContent>
              </Carousel>
            </CardHeader>
            <CardTitle className="text-center text-green_1 m-6">
              {card.title}
            </CardTitle>
            <CardContent>
              <ul className="flex flex-col border border-green_3 rounded-xl shadow-sm p-10">
                <li>
                  <strong>{card.info.locality[0].split("-")[1]}</strong>
                </li>
                {card.info.pool.havePool && (
                  <li> Piscina: {card.info.pool.size}</li>
                )}
                {card.info.size && (
                  <li className="flex flex-rows items-center gap-4">
                    Área: {card.info.size}
                  </li>
                )}
                {/* {card.info.hosting && (
                  <li className="flex flex-rows items-center gap-4">
                    <FaCheck /> Hospedagem | Para eventos:{" "}
                    {card.info.event_capacity}
                  </li>
                )}
                {card.info.furniture && (
                  <li className="flex flex-rows items-center gap-4">
                    <FaCheck />
                    Mobília no local
                  </li>
                )}
                {card.info.barbecue_area && (
                  <li className="flex flex-rows items-center gap-4">
                    <FaCheck />
                    Área de churrasco
                  </li>
                )}
                {card.info.cooking_area && (
                  <li className="flex flex-rows items-center gap-4">
                    <FaCheck />
                    Cozinha
                  </li>
                )}
                {card.info.pool.havePool && (
                  <li className="flex flex-rows items-center gap-4">
                    <FaCheck />
                    Piscina -{card.info.pool.size}
                  </li>
                )}
                {card.info.playground && (
                  <li className="flex flex-rows items-center gap-4">
                    <FaCheck />
                    Playground
                  </li>
                )}
                {card.info.wifi && (
                  <li className="flex flex-rows items-center gap-4">
                    <FaCheck />
                    Wi-fi
                  </li>
                )} */}
              </ul>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}

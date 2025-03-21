//#region imports
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, CardTitle } from "@/Components/ui/card";

//#region images
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import cardData from "@/utils/cardData";

//#endregion
//#endregion
export default function CardList() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-10">
      {cardData &&
        cardData.map((card, index) => (
          <Card
            onClick={() => navigate(`/spaces/${index}`)}
            className="w-[50vw] h-auto rounded-xl hover:cursor-pointer"
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
                            alt=""
                          />
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
              </Carousel>
            </CardHeader>

            <CardTitle className="text-center text-green_1 m-6">
              {card.title}
            </CardTitle>
          </Card>
        ))}
    </div>
  );
}

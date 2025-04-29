//#region imports
import React, { useState } from "react";
import Modal from "react-modal";
import Autoplay from "embla-carousel-autoplay";

//#region ui components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
//#endregion
//#region images
import bellyLogo from "@/assets/images/costumers/belly/logo-belly.jpg";
import belly from "@/assets/images/costumers/belly/IMG_4205.jpg";
// import belly1 from "@/assets/images/costumers/belly/IMG_4212.heic";
// import belly2 from "@/assets/images/costumers/belly/IMG_4225.heic";
// import belly3 from "@/assets/images/costumers/belly/IMG_4227.heic";
import voOrlandoLogo from "@/assets/images/costumers/vo-orlando/logo-vo-orlando.jpg";
import voOrlando1 from "@/assets/images/costumers/vo-orlando/vo-orlando(1).jpg";
import voOrlando2 from "@/assets/images/costumers/vo-orlando/vo-orlando(2).jpg";
import voOrlando3 from "@/assets/images/costumers/vo-orlando/vo-orlando(3).jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
//#endregion
//#endregion
export default function SocialProof() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const bellyImages = [belly];
  const voOrlandoImages = [voOrlando1, voOrlando2, voOrlando3];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const plugin2 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <section className="flex flex-col justify-items-center gap-40">
      <div className="flex justify-evenly gap-[33vw]">
        <div className="text-center">
          <img
            src={bellyLogo}
            className="rounded-full w-[25rem] m-auto max-lg:max-w-[25vw]"
          />
          <h3 className="max-lg:text-[2rem]">Chácara Belly</h3>
        </div>
        <div className="text-center">
          <img
            src={voOrlandoLogo}
            className="rounded-full w-[25rem] m-auto max-lg:max-w-[25vw]"
          />
          <h3 className="max-lg:text-[2rem]">Chácara do Vô Orlando</h3>
        </div>
      </div>
      <div className="flex justify-center items-center align-middle gap-10">
        <Carousel
          className="w-fit h-full "
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: bellyImages.length }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <img
                    src={bellyImages[index]}
                    className="max-w-1/3 max-lg:max-w-full"
                    onClick={() => openModal(bellyImages[index])}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel
          className="w-fit h-full "
          plugins={[plugin2.current]}
          onMouseEnter={plugin2.current.stop}
          onMouseLeave={plugin2.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: voOrlandoImages.length }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <img
                    src={voOrlandoImages[index]}
                    className="max-w-1/3 max-lg:max-w-full"
                    onClick={() => openModal(voOrlandoImages[index])}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Imagem"
          className="max-w-[75vw] flex flex-col items-start justify-self-center self-center p-10 border border-gray-300 rounded-[1.6rem] shadow-lg"
        >
          <button onClick={closeModal}>X</button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagem selecionada"
              className="modal-image"
            />
          )}
        </Modal>
      </div>
      <div className="flex flex-col gap-20">
        <Button
          asChild
          className=" h-[6rem] self-center rounded-xl text-[2rem] font-nunito font-extrabold text-white uppercase bg-green_2
          max-lg:text-[1.6rem] max-lg:h-fit max-lg:py-5 z-0"
        >
          <Link to="/spaces">Conheça todos os Chakreiros!</Link>
        </Button>
      </div>
    </section>
  );
}

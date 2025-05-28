import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

export default function FAQAccordion() {
  const faqData = [
    {
      title: "O que vocês vendem?",
      description:
        "Vendemos experiências! Facilitamos a conexão entre donos de chácaras e pessoas que querem viver momentos únicos",
    },
    {
      title: "Como funciona?",
      description: `<strong>É simples:</strong> <br />
      <ul>
        <li>Para quem procura chácaras: <br />Encontre o lugar perfeito para seu evento ou descanso.</li>
        <li><strong>Para donos de chácaras:</strong> <br />
        Cadastre seu espaço e gerencie reservas  facilmente. Para prestadores de serviços: Ofereça seus talentos e faça parte do ecossistema Chakreiros.</li>
      </ul>
       `,
    },
    {
      title: "Porque <strong>Chakreiros</strong>?",
      description:
        "Porque todo amante de chácaras é um Chakreiro! Seja você dono de uma chácara, alguém que adora organizar eventos ou só curte um fim de semana no campo, aqui você faz parte dessa comunidade que valoriza conexões, descontração e momentos inesquecíveis.",
    },
  ];
  return faqData.map((item, index) => (
    <Accordion key={index} type="single" collapsible className="w-full ">
      <AccordionItem className="border-black" value={`item-${index}`}>
        <AccordionTrigger className="">
          <h3
            className="whitespace-nowrap overflow-hidden overflow-ellipsis font-urbanist font-bold text-[1.6rem] leading-none text-[#8e8e93]"
            dangerouslySetInnerHTML={{ __html: item.title }}
          ></h3>
        </AccordionTrigger>
        <AccordionContent
          className="max-w-[80vw] text-justify font-nunito text-[1.3em]"
          id="AccordionContent"
        >
          <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ));
}

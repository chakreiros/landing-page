import { Button } from "../ui/button";

export default function CallToActionSection({
  text,
  link,
  external = false,
  className = "",
}) {
  return (
    <section className={`m-auto ${className}`}>
      <Button
        variant="outline"
        className="w-fit h-fit p-6 rounded-full font-nunito text-[2.2rem] text-white bg-green_2 hover:bg-green_4 hover:text-green_1"
      >
        {external ? (
          <a target="_blank" href={link} rel="noopener noreferrer">
            {text}
          </a>
        ) : (
          <a href={link}>{text}</a>
        )}
      </Button>
    </section>
  );
}

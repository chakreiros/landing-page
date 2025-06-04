import { Instagram } from "lucide-react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

import { Separator } from "@/Components/ui/separator";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between py-[2rem] bg-[#DDE2D0]">
      <div className="flex gap-[1.8rem]">
        <a target="blank" href="https://instagram.com/chakreiros">
          <Instagram size={46} />
        </a>
        <a
          target="blank"
          href="https://api.whatsapp.com/send/?phone=5519991841341&text=Eu%20quero%20ser%20um%20Chakreiro!"
        >
          <FaWhatsapp size={46} />
        </a>
        <a
          target="blank"
          href="https://www.facebook.com/profile.php?id=61574109584279"
        >
          <FaFacebook size={46} />
        </a>
      </div>

      <Separator className="bg-black" />

      <div>
        <p className="font-openSans text-[2rem] text-center">
          © 2025 Chakreiros, Inc. Privacidade
        </p>
      </div>
    </footer>
  );
}

//#region

import { useState } from "react";

import chakreirosLogo from "@/assets/images/chakreiros.png";

//#region icons
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
//#endregion
//#endregion

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full flex p-10 justify-around items-center bg-green_5 max-lg:flex-col-reverse max-lg:gap-20">
      <div className="flex flex-col items-center text-center gap-10">
        <img
          src={chakreirosLogo}
          alt="Chakreiros"
          className="h-auto w-[25rem]"
        />

        <p className="text-green_2 font-openSans font-extrabold text-[2rem]">
          Deixa com os Chakreiros!
        </p>

        <div className="flex justify-around gap-10">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5519991841341"
          >
            <IoLogoWhatsapp size="3em" className="text-green_2" />
          </a>
          <a target="_blank" href="https://www.instagram.com/chakreiros/">
            <AiFillInstagram size="3em" className="text-green_2" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/people/Chakreiros/61568862191978"
          >
            <FaFacebook size="3em" className="text-green_2" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/chakreiros">
            <FaLinkedin size="3em" className="text-green_2" />
          </a>
        </div>
      </div>
      <div id="mc_embed_shell">
        <div id="mc_embed_signup" className="p-10 bg-[#b6cd9f] rounded-xl">
          <form
            action="https://chakreiros.us15.list-manage.com/subscribe/post?u=a24e6ffbf8c4e00d5bbc47274&amp;id=016c7ea8c6&amp;f_id=00b7b7e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            noValidate=""
          >
            <div id="mc_embed_signup_scroll">
              <h2 className="text-[#234c20]">Eu quero Ser um Chakreiro!</h2>
            </div>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Endereço de e-mail<span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">
                Nome <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                name="FNAME"
                className=" text"
                id="mce-FNAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-PHONE">
                Telefone <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                name="PHONE"
                className="REQ_CSS"
                id="mce-PHONE"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              value="Enviar"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

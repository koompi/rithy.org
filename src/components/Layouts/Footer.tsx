import { Component } from "solid-js";
import { BiLogosLinkedin, BiLogosTelegram, BiLogosTwitter, }  from "solid-icons/bi";
import {SiEthereum} from "solid-icons/si"


const Footer: Component = () => {
  return (
    <footer class="footer container bg-base-100 w-full md:w-screen lg:w-[54rem] mx-auto items-center pt-24 px-4 md:px-0 lg:px-4 pb-4 text-neutral-content flex justify-between">
      <aside class="items-center grid-flow-col mx-auto md:mx-auto lg:mx-0">
        <p>Copyleft 2023 - <a href="https://rithy.org" class="text-blue-400 hover:text-blue-800"> rithy.org </a></p>
      </aside>
      <nav class="flex">
        <a
          rel="noopener noreferrer"
          href="https://t.me/s/rithythul/"
          target="_blank"
        >
          <BiLogosTelegram size={24} />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://linkedin.com/in/rithythul/"
          target="_blank"
        >
          <BiLogosLinkedin size={24} />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://x.com/rithythul/"
          target="_blank"
        >
          <BiLogosTwitter size={24} />
        </a>
        <a
          rel="noopener noreferrer"
          href=" https://app.ens.domains/rithy.eth"
          target="_blank"
        >
          <SiEthereum size={24} />
        </a>
       
      </nav>
    </footer>
  );
};

export default Footer;

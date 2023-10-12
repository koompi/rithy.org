import { Component } from "solid-js";
import {
  BiLogosLinkedin,
  BiLogosTelegram,
  BiLogosTwitter,
} from "solid-icons/bi";
import { SiEthereum } from "solid-icons/si";

const Footer: Component = () => {
  return (
    <footer class="footer container bg-base-100 w-full md:w-screen lg:w-[54rem] mx-auto items-center pt-24 sm:pt-6 lg:pt-24 px-4 md:px-0 lg:px-8 pb-4 text-neutral-content flex justify-between mb-0 sm:mb-36 lg:mb-0">
      <aside class="items-center sm:items-start lg:items-center grid-flow-col mx-auto md:mx-auto lg:mx-0">
        <p class="text-sm sm:text-4xl lg:text-sm">
          Copyleft 2023 -{" "}
          <a href="https://rithy.org" class="text-blue-400 hover:text-blue-800">
            {" "}
            rithy.org{" "}
          </a>
        </p>
      </aside>
      <aside class="flex">
        <a
          rel="noopener noreferrer"
          href="https://t.me/s/rithythul/"
          target="_blank"
        >
          <BiLogosTelegram class="text-2xl sm:text-5xl lg:text-2xl" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://linkedin.com/in/rithythul/"
          target="_blank"
        >
          <BiLogosLinkedin class="text-2xl sm:text-5xl lg:text-2xl" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://x.com/rithythul/"
          target="_blank"
        >
          <BiLogosTwitter class="text-2xl sm:text-5xl lg:text-2xl" />
        </a>
        <a
          rel="noopener noreferrer"
          href=" https://app.ens.domains/rithy.eth"
          target="_blank"
        >
          <SiEthereum class="text-2xl sm:text-5xl lg:text-2xl" />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;

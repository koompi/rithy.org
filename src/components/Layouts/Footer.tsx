import { Component } from "solid-js";
import { BiLogosLinkedin, BiLogosTelegram, BiLogosTwitter } from "solid-icons/bi";

const Footer: Component = () => {
  return (
    <footer class="footer container bg-base-100 w-full md:w-screen lg:w-[54rem] mx-auto items-center pt-24 px-4 md:px-0 lg:px-4 pb-4 text-neutral-content">
      <aside class="items-center grid-flow-col mx-auto md:mx-auto lg:mx-0">
        <p>Copyleft 2023 - <a href="https://rithy.org"> rithy.org </a></p>
      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end hidden md:hidden lg:block">
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
      </nav>
    </footer>
  );
};

export default Footer;

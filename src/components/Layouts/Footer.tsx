import { Component } from "solid-js";
import { BiLogosTelegram } from "solid-icons/bi";

const Footer: Component = () => {
  return (
    <footer class="footer container bg-base-100 w-full md:w-screen lg:w-[54rem] mx-auto items-center pt-24 px-4 md:px-0 lg:px-4 pb-4 text-neutral-content">
      <aside class="items-center grid-flow-col mx-auto md:mx-auto lg:mx-0">
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end hidden md:hidden lg:block">
        <a
          rel="noopener noreferrer"
          href="https://t.me/s/rithythul/"
          target="_blank"
        >
          <BiLogosTelegram size={24} />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;

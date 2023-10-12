import { Component } from "solid-js";
import { useLocation } from "solid-start";
import { BiLogosTelegram } from "solid-icons/bi";
import { HiSolidRectangleStack, HiOutlineRectangleStack } from "solid-icons/hi";
import { RiBuildingsHome4Line, RiBuildingsHome4Fill } from "solid-icons/ri";

const MobileNavigator: Component = () => {
  const location = useLocation();

  const active = (path: string) =>
    path == location?.pathname ? "active" : null;

  return (
    <div class="btm-nav hidden sm:flex lg:hidden h-24 ">
      <a href="/" class={`${active("/")} pb-2 pt-3`}>
        {active("/") ? (
          <RiBuildingsHome4Fill class="text-4xl" />
        ) : (
          <RiBuildingsHome4Line class="text-4xl" />
        )}
        <span class="btm-nav-label text-3xl">Home</span>
      </a>
      <a href="/projects" class={`${active("/projects")} pb-2 pt-3`}>
        {active("/projects") ? (
          <HiSolidRectangleStack class="text-4xl" />
        ) : (
          <HiOutlineRectangleStack class="text-4xl" />
        )}

        <span class="btm-nav-label text-3xl">Projects</span>
      </a>
      <a
        target="_blank"
        href="https://t.me/s/rithythul"
        class={`${active("/journal")} pb-2 pt-3`}
      >
        <BiLogosTelegram class="text-4xl" />
        <span class="btm-nav-label text-3xl">Journal</span>
      </a>
    </div>
  );
};

export default MobileNavigator;

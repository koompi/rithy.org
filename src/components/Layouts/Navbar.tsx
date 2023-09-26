import { type Component } from "solid-js";
import { FiMoon, FiSun } from "solid-icons/fi";
import { useLocation } from "solid-start";
import { theme } from "./../../root";
import { updateTheme } from "./../../root";

const Navbar: Component = () => {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "text-indigo-400 hover:text-indigo-600 text-lg"
      : "border-transparent hover:text-indigo-600 text-lg";

  const toggleTheme = () => {
    if (theme() === "night") {
      updateTheme("acid");
    } else {
      updateTheme("night");
    }
  };

  return (
    <div class="navbar container bg-base-100 w-full md:w-screen lg:w-[54rem] px-0 md:px-0 lg:px-4 mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a target="_blank" href="https://t.me/s/rithythul">Notes</a>
            </li>
          </ul>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a class={active("/")} href="/">
                Home
              </a>
            </li>
            <li>
              <a class={active("/projects")} href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a class={active("/about")} href="/about">
                About
              </a>
            </li>
            <li>
              <a class={active("https://t.me/s/rithythul")} target="_blank" href="https://t.me/s/rithythul">
                Notes
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="navbar-end">
        <label class="swap swap-rotate btn btn-ghost">
          <input type="checkbox" onchange={() => toggleTheme()} />
          {theme() === "acid" ? <FiSun size={24} /> : <FiMoon size={24} />}
        </label>
      </div>
    </div>
  );
};

export default Navbar;

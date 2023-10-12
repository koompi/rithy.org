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
    <div class="navbar container bg-base-100 w-full md:w-screen lg:w-[54rem] px-0 md:px-0 lg:px-4 mx-auto py-0 sm:py-6 lg:py-0">
      <div class="navbar-start">
        <h1 class="hidden sm:block lg:hidden text-base-content text-2xl sm:text-3xl lg:text-3xl">
          ./Rithy THUL
        </h1>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a class={active("/")} href="/">
                ./home
              </a>
            </li>
            <li>
              <a class={active("/projects")} href="/projects">
                ./projects
              </a>
            </li>
            {/* <li>
              <a class={active("/about")} href="/about">
                About
              </a>
            </li> */}
            <li>
              <a
                class={active("https://t.me/s/rithythul")}
                target="_blank"
                href="https://t.me/s/rithythul"
              >
                _/journal
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="navbar-end">
        <label class="swap swap-rotate btn btn-ghost">
          <input type="checkbox" onchange={() => toggleTheme()} />
          {theme() === "acid" ? (
            <FiSun class="text-2xl sm:text-5xl lg:text-2xl" />
          ) : (
            <FiMoon class="text-2xl sm:text-5xl lg:text-2xl" />
          )}
        </label>
      </div>
    </div>
  );
};

export default Navbar;

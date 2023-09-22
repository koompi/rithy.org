import { Component, For, Show } from "solid-js";
import { Banner } from "./index";
import { projectsData } from "~/data/projects";

const Projects = () => {
  return (
    <main class="container mx-auto bg-base-100 w-[54rem] px-4 ">
      <Banner />
      <ProjectsLine />
    </main>
  );
};

export default Projects;

export const ProjectsLine: Component = () => {
  return (
    <section class="dark:bg-gray-800 dark:text-gray-100 w-full">
      <div class="py-12 " data-aos="fade-up">
        <div class="grid gap-4 mx-4 sm:grid-cols-12">
          <div class="col-span-12 sm:col-span-3">
            <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
              <h3 class="text-3xl font-semibold">Projects</h3>
              <span class="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                and Eco-system
              </span>
            </div>
          </div>
          <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <For each={projectsData}>
                {(res) => (
                  <Show when={res} fallback={<p>Loading ...</p>}>
                    <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                      <h3 class="text-xl font-semibold tracking-wide">
                        {res.name}
                      </h3>
                      <time class="text-xs tracking-wide uppercase dark:text-gray-400">
                        {res.createdAt}
                      </time>
                      <p class="mt-3">{res.desc}</p>
                    </div>
                  </Show>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

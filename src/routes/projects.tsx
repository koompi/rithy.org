import { Component, For, Show } from "solid-js";
import { Banner } from "./index";
import { projectsData } from "~/data/projects";

const Projects = () => {
  return (
    <main class="container mx-auto bg-base-100 w-full md:w-screen lg:w-[54rem] px-4 ">
      <Banner />
      <ProjectsLine />
    </main>
  );
};

export default Projects;

export const ProjectsLine: Component = () => {
  return (
    <section class="w-full">
      <div class="py-12 " data-aos="fade-up">
        <div class="grid gap-4 mx-4 sm:grid-cols-12">
          <div class="col-span-12 sm:col-span-3">
            <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-indigo-400">
              <h3 class="text-3xl font-semibold">Projects</h3>
              <span class="text-sm font-bold tracking-wider uppercase text-gray-400">
                Currently Involved
              </span>
            </div>
          </div>
          <div class="relative col-span-12 px-0 md:px-0 lg:px-4 space-y-6 sm:col-span-9">
            <div class="col-span-12 space-y-12 relative sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-indigo-200">
              <For each={projectsData}>
                {(res) => (
                  <Show when={res} fallback={<p>Loading ...</p>}>
                    <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-indigo-400">
                      <h3 class="text-xl sm:text-4xl lg:text-xl font-semibold sm:font-normal lg:font-semibold tracking-wide">
                        {res?.name}
                      </h3>
                      <time class="text-xs sm:text-3xl lg:text-xs tracking-wide uppercase text-secondary">
                        {res?.createdAt}
                      </time>
                      <p class="mt-3 text-md sm:text-2xl lg:text-xl">
                        {res?.desc}
                      </p>
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

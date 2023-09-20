import { For, type Component, Show } from "solid-js";
import { A } from "solid-start";
import { CompaniesInfo } from "~/data/companies";

export default function Home() {
  return (
    <main class=" container mx-auto text-gray-700  bg-base-100 w-[54rem] px-4">
      <Banner />
      <Companies />
      <Blogs />
    </main>
  );
}

//  banner intro
export const Banner: Component = () => {
  return (
    <section>
      <div class="hero bg-base-100 pt-12 pb-6">
        <div class="hero-content flex-col lg:flex-row-reverse justify-between">
          <div class="avatar">
            <div class="w-40 rounded-full shadow-2xl">
              <img src="/images/rithy-thul.jpg" alt="Rithy Thul's profile" />
            </div>
          </div>
          <div class="text-start">
            <h1 class="text-4xl font-bold">Rithy THUL</h1>
            <p class="text-base-content text-sm mt-1">
              Owned @smallworld @koompi @selendra
            </p>
            <p class="py-3">
              Daydream @smallworldventure, building and nurturing @koompi,
              @selendra, @vitaminair. Notes @rithythul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// component company
export const Companies: Component = () => {
  return (
    <section class="px-4">
      <h1 class="text-2xl font-semibold">Companies</h1>
      <div class="mt-6 grid grid-cols-3 gap-3">
        <For each={CompaniesInfo}>
          {(res) => {
            return (
              <Show when={res} fallback={<p>loading ...</p>}>
                <A href={res.link} target="_blank">
                  <div class="grid-cols-1 h-full rounded-xl px-3 py-4 shadow-sm border border-slate-300 hover:border-slate-400">
                    <img alt={res.name} src={res.logo} class="w-1/2 h-auto" />
                    <p class="text-sm text-base-content mt-3">{res.desc}</p>
                  </div>
                </A>
              </Show>
            );
          }}
        </For>
      </div>
    </section>
  );
};

// component blogs

export const Blogs: Component = () => {
  return (
    <section class="px-4 mt-12">
      <h1 class="text-2xlfont-semibold">Notes to Theyself</h1>
      <div class="mt-6 grid grid-cols-3 gap-3">
        <For each={CompaniesInfo}>
          {(res) => {
            return (
              <Show when={res} fallback={<p>loading ...</p>}>
                <A href="#">
                  <div class="grid-cols-1 h-full rounded-xl px-3 py-4 shadow-sm border border-slate-300 hover:border-slate-400">
                    <p class="text-sm text-base-content mt-3">{res.desc}</p>
                  </div>
                </A>
              </Show>
            );
          }}
        </For>
      </div>
    </section>
  );
};

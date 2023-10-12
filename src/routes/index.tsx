import { type Component } from "solid-js";

export default function Home() {
  return (
    <main class="text-gray-700 container mx-auto bg-base-100 w-full sm:w-full lg:w-[54rem] px-4 sm:px-0 lg:px-4">
      <Banner />
      <Bio />
    </main>
  );
}

//  banner intro
export const Banner: Component = () => {
  return (
    <section>
      <div class="hero bg-base-100 pt-12 pb-6">
        <div class="hero-content flex-col lg:flex-row-reverse justify-between">
          <div class="avatar mx-0">
            <div class="w-40 rounded shadow-2xl">
              <img src="/images/rithy-thul.jpg" alt="Rithy Thul's profile" />
            </div>
          </div>
          <div class="text-center md:text-start text-base-content">
            <h1 class="text-4xl font-bold">Rithy Thul</h1>
            <p class="text-lg mt-1 sm:text-4xl lg:text-lg ">
              A daydreamer{" "}
              <a
                target="_blank"
                href="https://smallworldventure.com"
                class="text-blue-400 hover:text-green-400"
              >
                @smallworld{" "}
              </a>
              , building and nurturing
              <a
                target="_blank"
                href="https://koompi.com"
                class="text-blue-400 hover:text-green-400"
              >
                @koompi,{" "}
              </a>
              <a
                target="_blank"
                href="https://portal.selendra.org"
                class="text-blue-400 hover:text-green-400"
              >
                @selendra,{" "}
              </a>
              <a
                target="_blank"
                href="https://vitaminair.org"
                class="text-blue-400 hover:text-green-400"
              >
                @vitaminair
              </a>
              , and journaling
              <a
                target="_blank"
                href="https://t.me/s/rithythul"
                class="text-blue-400 hover:text-green-400"
              >
                @rithythul.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Bio component
export const Bio: Component = () => {
  return (
    <section class="text-gray-600 body-font" data-aos="fade-up">
      <div class="py-2 w-full mx-50">
        <div class="mx-auto text-left ml-5 text-base-content ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="inline-block w-8 h-8 text-gray-400 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed text-lg  sm:text-4xl lg:text-lg">
            As an entrepreneur, adventurer, cyclist, and writer, I've had the
            privilege to initiate various endeavors over the years. In 2011,{" "}
            <a
              href="https://smallworldventure.com"
              class="text-blue-400 hover:text-green-400"
              target="_blank"
            >
              SmallWorld
            </a>{" "}
            came to life with the aim of fostering a thriving tech startup
            community in Cambodia. In 2017,{" "}
            <a
              href="https://koompi.com"
              class="text-blue-400 hover:text-green-400"
              target="_blank"
            >
              KOOMPI
            </a>{" "}
            emerged as Cambodia's first recognized laptop brand, dedicated to
            bridging the digital divide and making technology more accessible.
          </p>
          <br />
          <p class="leading-relaxed text-lg  sm:text-4xl lg:text-lg">
            That same year, the vision for{" "}
            <a
              href="https://vitaminair.org"
              class="text-blue-400 hover:text-green-400"
              target="_blank"
            >
              VitaminAir
            </a>{" "}
            took shape. It's a project designed to create a sustainable living
            community on privately purchased forest land. VitaminAir provides
            transformative learning experiences for students, with the hope of
            not only promoting the concept but also nurturing future residents.
          </p>
          <br />
          <p class="leading-relaxed text-lg sm:text-4xl lg:text-lg">
            In 2019,{" "}
            <a
              href="https://selendra.org"
              class="text-blue-400 hover:text-green-400"
              target="_blank"
            >
              Selendra
            </a>{" "}
            was born as a user-friendly blockchain, with a mission to empower
            businesses and developers. All these ventures align with my passion
            for technology, entrepreneurship, education, and harmonious living
            with nature.{" "}
            <a
              href="https://portal.selendra.org"
              class="text-blue-400 hover:text-green-400"
              target="_blank"
            >
              Mainnet
            </a>{" "}
            is now lived.
          </p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
};

// // component company
// export const Companies: Component = () => {
//   return (
//     <section class="md:px-0 lg:px-4">
//       <h1 class="text-2xl font-semibold">Companies</h1>
//       <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
//         <For each={CompaniesInfo}>
//           {(res) => {
//             return (
//               <Show when={res} fallback={<p>loading ...</p>}>
//                 <A href={res.link} target="_blank" rel="noopener noreferrer">
//                   <div class="grid-cols-1 h-full rounded-xl px-3 py-4 shadow-sm border border-slate-300 hover:border-slate-400">
//                     <img alt={res.name} src={res.logo} class="w-1/2 h-auto" />
//                     <p class="text-sm text-base-content mt-3">{res.desc}</p>
//                   </div>
//                 </A>
//               </Show>
//             );
//           }}
//         </For>
//       </div>
//     </section>
//   );
// };

// // component blogs

// export const Blogs: Component = () => {
//   return (
//     <section class="md:px-0 lg:px-4 mt-12">
//       <h1 class="text-2xl font-semibold">Notes to Theyself</h1>
//       <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
//         <For each={CompaniesInfo}>
//           {(res) => {
//             return (
//               <Show when={res} fallback={<p>loading ...</p>}>
//                 <A href="#">
//                   <div class="grid-cols-1 h-full rounded-xl px-3 py-4 shadow-sm border border-slate-300 hover:border-slate-400">
//                     <p class="text-sm text-base-content mt-3">{res.desc}</p>
//                   </div>
//                 </A>
//               </Show>
//             );
//           }}
//         </For>
//       </div>
//     </section>
//   );
// };

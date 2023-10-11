import { For, type Component, Show, createEffect } from "solid-js";
import { A } from "solid-start";
import { projectsData } from "~/data/projects";
import axios from "axios";
import { Bio } from "~/data/bio"

export default function Home() {
  createEffect(async () => {
    let posts = await axios.get("/api/posts");
    console.log(posts.data);
  });

  return (
    <main class="text-gray-700  container mx-auto  bg-base-100 w-full lg:w-[54rem] px-4">
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
            <div class="w-40 rounded-full shadow-2xl">
              <img src="/images/rithy-thul.jpg" alt="Rithy Thul's profile" />
            </div>
          </div>
          <div class="text-center md:text-start">
            <h1 class="text-4xl font-bold">Rithy Thul</h1>
            <p class="text-base-content text-lg mt-1">
            A daydreamer <a href="https://smallworldventure.com">@smallworld </a>  
              , building and nurturing 
              <a target="_blank" href="https://koompi.com">@koompi, </a> 
              <a target="_blank" href="https://portal.selendra.org">@selendra, </a> 
              <a target="_blank" href="https://vitaminair.org">@vitaminair, and journaling </a> 
              <a target="_blank" href="https://t.me/s/rithythul">@rithythul.</a>
            </p>
          </div>
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

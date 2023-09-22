import { Component } from "solid-js";
import { Banner } from "./index";

const Contact = () => {
  return (
    <main class="text-gray-700  container mx-auto  bg-base-100 w-[54rem] px-4 ">
      <Banner />
      <ContactList />
    </main>
  );
};

export default Contact;

export const ContactList: Component = () => {
  return (
    <section class="px-4 py-12" data-aos="fade-up">
      <div class="lg:w-1/2 lg:mt-0">
        <h2 class="title-font font-semibold text-base-content tracking-widest text-xs">
          EMAIL
        </h2>
        <a class="text-indigo-400 leading-relaxed">rithy@koompi.com</a>
        <h2 class="title-font font-semibold text-base-content tracking-widest text-xs mt-4">
          TELEGRAM
        </h2>
        <p class="leading-relaxed">123-456-7890</p>
      </div>
    </section>
  );
};

import { A } from "solid-start";

export default function NotFound() {
  return (
    <main class="container w-[54rem] px-4 text-center mx-auto text-gray-700">
      <div class="mockup-browser border bg-base-300 mt-44">
        <div class="mockup-browser-toolbar">
          <div class="input">https://rithythul.org</div>
        </div>
        <div class="text-center px-4 py-16 bg-base-200">
          <p>Sorry the page is not found!</p>
          <A href="/">
            <button class="btn btn-wide mt-3">Home</button>
          </A>
        </div>
      </div>
    </main>
  );
}

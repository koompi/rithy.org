import solid from "solid-start/vite";
import { defineConfig } from "vite";
// add this line to test with vercel 
// import vercel from "solid-start-vercel";

export default defineConfig({
 plugins: [solid()],
 // plugins: [solid({ adapter: vercel() })],
});

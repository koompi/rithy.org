// @refresh reload
import { Suspense, createEffect, createSignal } from "solid-js";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import MobileNavigator from "./components/Layouts/MobileNavigator";

const defaultTheme = () => {
  if (typeof localStorage === "undefined") {
    return "acid";
  }
  return localStorage.getItem("data-theme") ?? "acid";
};

export const [theme, setTheme] = createSignal<string>(defaultTheme());

export const updateTheme = (name: string) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("data-theme", name);
    setTheme(name);
  }
};

export default function Root() {
  createEffect(() => {
    AOS.init();
  });
  return (
    <Html lang="en" data-theme={theme()}>
      <Head>
        <Title>Rithy THUL</Title>
        <Meta name="twitter:image:src" content="/images/rithy-thul.jpg" />
        <Meta name="twitter:site" content="@github" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:title" content="Rithy THUL" />
        <Meta
          name="twitter:description"
          content="A daydreamer @smallworld , building and nurturing@koompi, @selendra, @vitaminair, and journaling@rithythul."
        />
        <Meta property="og:image" content="/images/rithy-thul.jpg" />
        <Meta
          property="og:image:alt"
          content="A daydreamer @smallworld , building and nurturing@koompi, @selendra, @vitaminair, and journaling@rithythul."
        />
        <Meta property="og:image:width" content="1200" />
        <Meta property="og:image:height" content="600" />
        <Meta property="og:site_name" content="GitHub" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Navbar />
            <Routes>
              <FileRoutes />
            </Routes>
            <Footer />
            <MobileNavigator />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}

import React from "react";
import PopupForm from "@/components/ui/PopupForm";
import HeroSlider from "@/components/sections/HeroSlider";
import Commitment from "@/components/sections/Commitment";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Partners from "@/components/sections/Partners";

export default function Home() {
  return (
    <>
      <PopupForm />
      <HeroSlider />
      <Commitment />
      <About />
      <Projects />
      <Services />
      <Partners />
    </>
  );
}

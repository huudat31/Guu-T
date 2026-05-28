import React from "react";
import PopupForm from "@/components/ui/PopupForm";
import Commitment from "@/components/sections/Commitment";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Partners from "@/components/sections/Partners";
import { cachedFetch } from "@/components/sanity-client";

export default async function Home() {
  const projectsQuery = `
    *[_type == "project"] | order(_updatedAt desc)[0...6] {
      _id,
      title,
      shortDesc,
      "slug": slug.current,
      "image": heroImage.asset->url
    }
  `;
  const projects = await cachedFetch(projectsQuery);

  return (
    <>
      <PopupForm />
      <Projects projects={projects} />
      <Commitment />
      <About />
      <Services />
      <Partners />
    </>
  );
}

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { client } from "@/components/sanity-client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full aspect-video my-12 overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="font-sans text-3xl md:text-4xl font-light text-white mb-8 mt-24">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-sans text-2xl md:text-3xl font-light text-white mb-6 mt-16">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="font-sans text-on-surface-variant leading-[1.8] mb-12">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="font-sans font-light text-secondary text-2xl border-l border-secondary pl-8 py-4 my-12">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-secondary underline decoration-secondary/30 hover:decoration-secondary transition-all"
        >
          {children}
        </a>
      );
    },
  },
};

export default function RichText({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}

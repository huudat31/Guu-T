import { client } from "@/components/sanity-client";

export const getProjects = async () => {
  const query = `
    *[_type == "project"]{
      _id,
      title,
      "slug": slug.current,
      "category": serviceType,
      "image": heroImage.asset->url
    }
  `;
  return await client.fetch(query);
};

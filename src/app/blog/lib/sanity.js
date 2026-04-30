import { client } from "@/components/sanity-client";

export const getPosts = async () => {
  const query = `
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      "summary": coalesce(summary, description),
      "image": heroImage.asset->url
    }
  `;
  return await client.fetch(query);
};

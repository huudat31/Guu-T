import { client } from "@/components/sanity-client";

export const getTeam = async () => {
  const query = `
    *[_type == "teamMember"] | order(order asc){
      _id,
      name,
      position,
      order,
      "image": photo.asset->url
    }
  `;
  return await client.fetch(query);
};

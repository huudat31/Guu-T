import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});

// Cached fetch helper cho Server Components
export async function cachedFetch(query: string, params = {}) {
  return client.fetch(query, params, {
    cache: "no-store",
  });
}

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "08k96exq",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

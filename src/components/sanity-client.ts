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

export interface BannerItem {
  heading?: string;
  subtext?: string;
  imageUrl?: string;
}

export interface SiteSettings {
  title: string;
  banners?: {
    home?: BannerItem;
    about?: BannerItem;
    project?: BannerItem;
    services?: BannerItem;
    news?: BannerItem;
    contact?: BannerItem;
    team?: BannerItem;
  };
}

export async function fetchSiteSettings(): Promise<SiteSettings | null> {
  // Lấy TẤT CẢ siteSettings và merge banners lại
  // Tránh trường hợp document mới hơn nhưng thiếu dữ liệu che mất document đầy đủ hơn
  const query = `
    *[_type == "siteSettings"] | order(_updatedAt desc){
      title,
      banners{
        home{heading, subtext, "imageUrl": image.asset->url},
        about{heading, subtext, "imageUrl": image.asset->url},
        project{heading, subtext, "imageUrl": image.asset->url},
        services{heading, subtext, "imageUrl": image.asset->url},
        news{heading, subtext, "imageUrl": image.asset->url},
        contact{heading, subtext, "imageUrl": image.asset->url},
        team{heading, subtext, "imageUrl": image.asset->url}
      }
    }
  `;
  try {
    const allSettings: SiteSettings[] = await cachedFetch(query);
    if (!allSettings || allSettings.length === 0) return null;

    // Merge: duyệt từng document theo thứ tự mới → cũ
    // Với mỗi banner key, lấy giá trị đầu tiên có imageUrl (ưu tiên document có ảnh)
    const bannerKeys = ["home", "about", "project", "services", "news", "contact", "team"] as const;
    const mergedBanners: SiteSettings["banners"] = {};

    for (const key of bannerKeys) {
      for (const doc of allSettings) {
        const banner = doc.banners?.[key];
        if (banner?.imageUrl) {
          mergedBanners[key] = banner;
          break; // Dùng document đầu tiên có ảnh cho key này
        }
      }
      // Nếu không tìm được ảnh, lấy từ document đầu tiên có field đó
      if (!mergedBanners[key]) {
        for (const doc of allSettings) {
          const banner = doc.banners?.[key];
          if (banner) {
            mergedBanners[key] = banner;
            break;
          }
        }
      }
    }

    return {
      title: allSettings[0].title,
      banners: mergedBanners,
    };
  } catch (error) {
    console.error("Failed to fetch siteSettings from Sanity", error);
    return null;
  }
}




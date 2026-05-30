import { cachedFetch, fetchSiteSettings } from "@/components/sanity-client";
import NewsHero from "@/components/news/NewsHero";
import BlogCard from "@/components/blog/BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Tin Tức & Sự Kiện | Guu & T",
  description: "Cập nhật những xu hướng thiết kế nội thất và kiến trúc mới nhất từ Guu & T.",
};

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const postsQuery = `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "category": coalesce(category->title, categories[0]->title),
      publishedAt,
      "summary": excerpt,
      "image": coalesce(heroImage.asset->url, mainImage.asset->url)
    }
  `;

  const [posts, siteSettings] = await Promise.all([
    cachedFetch(postsQuery),
    fetchSiteSettings()
  ]);

  const newsBanner = siteSettings?.banners?.news || {};
  const newsList = posts || [];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NewsHero
        title={newsBanner.heading || "Tin Tức & Sự Kiện"}
        subtitle={newsBanner.subtext || "Tầm nhìn & Câu chuyện"}
        backgroundImage={newsBanner.imageUrl || newsList[0]?.image}
      />

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {newsList.map((post: any, idx: number) => (
            <AnimatedSection key={post._id} direction="up" delay={0.1 * (idx % 3)}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>

        {newsList.length > 9 && (
          <div className="mt-20 md:mt-32 flex justify-center items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center border border-white/10 text-on-surface hover:border-secondary transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              <button className="w-12 h-12 flex items-center justify-center bg-secondary text-on-secondary font-sans text-xs">
                1
              </button>
            </div>
            <button className="w-12 h-12 flex items-center justify-center border border-white/10 text-on-surface hover:border-secondary transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </main>

      <section className="bg-surface-container-low py-24 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <AnimatedSection direction="up">
            <div>
              <h2 className="font-sans font-light text-3xl md:text-5xl text-on-surface mb-8">
                Đăng Ký Nhận Bản Tin
              </h2>
              <p className="font-sans text-on-surface-variant mb-12">
                Cập nhật những xu hướng thiết kế mới nhất và các sự kiện độc quyền dành riêng cho
                giới thượng lưu.
              </p>
              <form className="flex flex-col md:flex-row gap-6 md:gap-0">
                <div className="flex-1 border-b border-white/20 focus-within:border-secondary transition-colors pb-1">
                  <input
                    className="w-full bg-transparent border-none py-4 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-0 font-sans"
                    placeholder="Địa chỉ email của bạn"
                    type="email"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-secondary text-on-secondary px-12 py-4 font-sans text-[10px] tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

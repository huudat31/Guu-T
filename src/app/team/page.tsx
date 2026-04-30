"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/components/sanity-client";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  order: number;
  image: string;
}

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const query = `
          *[_type == "teamMember"] | order(order asc){
            _id,
            name,
            position,
            order,
            "image": photo.asset->url
          }
        `;
        const data = await client.fetch(query);
        setTeam(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30 selection:text-white">
      {/* Hero */}
      <header className="relative h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/60 z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDduP-QAyuf_x2JI-K5T2lMMwtasDnzgD8sB9FmUzJZUjE2wXfLMs9K9Ek9En8UtE0Tlc9R1yCYf-DZCZguxzFV0MUqejGezlvYM74crHOmw9jO2p0iOlJGQmrXcgXIDmN-Qi_91VD4Z3LR6XO8KMtqc773qhi_zFMq8g6vYgLuWNbAS3-vsMI1FQLwrspBjINIZcw2-R_0oQ6hQgbCQ8IdBV4ccAe-lzffpavIq5c6yHc1cpG-Slw7_YEPQItbRjERY95k6ihw11x4"
            alt="Guu & T Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-sans text-secondary tracking-[0.6em] uppercase text-[10px] font-semibold mb-6"
          >
            The Visionaries
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="font-sans font-light text-white text-5xl md:text-7xl uppercase tracking-wider"
          >
            Đội Ngũ Sáng Tạo
          </motion.h1>
        </div>
      </header>

      {/* Team Grid */}
      <section className="py-24 md:py-40 px-8 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={`skeleton-${i}`} className="glass-card aspect-[3/4] bg-gray-800 animate-pulse rounded-xl" />
              ))
            ) : (
              team.map((member, idx) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="glass-card overflow-hidden group"
                >
                  <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 space-y-2">
                    <p className="font-sans text-secondary uppercase text-[10px] tracking-[0.3em] font-semibold">{member.position}</p>
                    <h5 className="font-sans text-2xl text-on-surface">{member.name}</h5>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

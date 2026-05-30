"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface StatsItem {
  label: string;
  value: string;
}

interface ParsedStat {
  label: string;
  target: number;
  suffix: string;
  raw: string;
  hasNumeric: boolean;
}

interface ProjectStatsProps {
  stats: StatsItem[];
}

const parseStatValue = (value: string): ParsedStat => {
  const trimmed = value.trim();

  // Hỗ trợ cả số thập phân
  const match = trimmed.match(/^(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return {
      label: "",
      target: 0,
      suffix: "",
      raw: trimmed,
      hasNumeric: false,
    };
  }

  return {
    label: "",
    target: Number(match[1]),
    suffix: match[2] ?? "",
    raw: trimmed,
    hasNumeric: true,
  };
};

export default function ProjectStats({ stats }: ProjectStatsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [hasStarted, setHasStarted] = useState(false);

  const parsedStats = useMemo<ParsedStat[]>(
    () =>
      stats.map((stat) => {
        const parsed = parseStatValue(stat.value);

        return {
          ...parsed,
          label: stat.label,
        };
      }),
    [stats],
  );

  // counts luôn sync với parsedStats
  const [counts, setCounts] = useState<number[]>(parsedStats.map(() => 0));

  // Observe section
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);

      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        parsedStats.map((stat) =>
          stat.hasNumeric ? Math.round(stat.target * eased) : 0,
        ),
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, parsedStats]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0b0f10] px-6 py-24 md:px-20 md:py-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 md:gap-8 lg:grid-cols-4">
        {parsedStats.map((stat, idx) => (
          <AnimatedSection key={`${stat.label}-${idx}`} direction="up" delay={0.1 * idx}>
            <div
              className="group flex flex-col items-center text-center h-full"
            >
              <span className="mb-3 font-sans text-4xl text-secondary transition-transform duration-500 group-hover:scale-110 md:text-5xl">
                {stat.hasNumeric ? `${counts[idx]}${stat.suffix}` : stat.raw}
              </span>

              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-500">
                {stat.label}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

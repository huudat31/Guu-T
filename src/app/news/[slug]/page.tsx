"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Share2, Bookmark } from "lucide-react";

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative w-full h-screen min-h-[800px] overflow-hidden">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.6 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPMkNwqGrIHB19ZPMXJsmzWWyUG8VFUMSjIAAGbRwhXLMTPHR6uk91NO5YerNVA_Lfeobd_ShLjlgX6nd6alIDHxUEjEybXm_X9uQzA84oGfrnMHFSZUDy0UE_rx94Gy8mstlix9NtAdGuI3Pb5PhdSb475xglOeBSprdqV4sjgSGTlKS71m494pcNqKr4UYrnHRVmCy84u77o00Tu6LCkoAaAIK-bI6nX1UJuDqQbAx2ARJlVjPAWQD42cfVlhthpKBHfhJJqMab8"
            alt="Luxury living room"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </motion.div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="text-secondary font-sans text-[10px] tracking-widest uppercase mb-6 block">
            JOURNAL — SEPTEMBER 2024
          </motion.span>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="font-sans font-light text-5xl md:text-7xl text-white max-w-4xl leading-tight tracking-tight">
            The Architecture of Silence: Curating Ethereal Residential Spaces
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 1 }} className="w-24 h-px bg-secondary mt-12 origin-left" />
        </div>
      </header>

      {/* Article */}
      <article className="relative py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sans text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-16 font-light">
            In an era defined by constant connectivity and sensory saturation, the concept of luxury has undergone a radical transformation. No longer is it measured by the accumulation of ornate objects, but rather by the presence of space, light, and silence.
          </motion.p>

          <h2 className="font-sans text-3xl md:text-4xl font-light text-white mb-8 mt-24">Structural Purity and Materiality</h2>
          <p className="font-sans text-on-surface-variant leading-[1.8] mb-12">
            The foundation of a quiet room lies in its structural integrity. We look for materials that speak without shouting—honed travertine, smoked oak, and hand-applied lime wash. These elements provide a tactile richness that does not compete for visual attention.
          </p>

          <div className="my-32 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/3 overflow-hidden">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} className="w-full h-auto grayscale brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBufPtNIxr9S5Us_H9kjy2t674zzQdzwp1Z6ANQhEeDbi3Rx1KxwKoeLeYnDDm1nxs0mW7nHptCKXkJfwQaxRRDuNcnDF8Dsj1kvGG-Jk3BLybjmDjqjB-ak3c4fE56j1jIHzhjJZswe4EH_p9Y8nJ77q5SR-n2dVDZIiSgjdbeoEeWtIIwTCz_qHOeqblRbbXzf4_UYjMJ6idC8QPBv0fZvLOrvkohodikQ26tyFITfx2Gsm40u5-iPJBOgL2EuUpuQ_hG1PDDG8E0" alt="Minimalist design detail" />
            </div>
            <div className="w-full md:w-1/3">
              <blockquote className="font-sans font-light text-secondary text-2xl border-l border-secondary pl-8 py-4">
                &ldquo;Design is not for philosophy, it&apos;s for life. The true luxury is a space that allows the mind to rest.&rdquo;
              </blockquote>
            </div>
          </div>

          <h2 className="font-sans text-3xl md:text-4xl font-light text-white mb-8 mt-24">The Curation of Void</h2>
          <p className="font-sans text-on-surface-variant leading-[1.8] mb-12">
            Curation is an exercise in restraint. Every piece of furniture must be chosen for its silhouette and its dialogue with the surrounding air. In our latest atelier collections, we focus on floating geometries—pieces that appear light, almost weightless.
          </p>

          <div className="my-32 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[3/4] overflow-hidden">
              <img className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR2lw0LxTbWPDb1Nwk_SMEXGNhn2EFmBUf_Kc4vqIpy9EggMY3Q4fG34GqZfPvG8iFp9N9mY-ouX3GH14Ak085PeFiPskfl9L5IeRzXMYbrq9k35_LjIIrNCNz5BhZWQsNhSVoiN0dqOH8suFQjqQzv129O0X6Gqf-cw9XQFe5eT7XtxG7r0JPhLIyVO5Z8rqu5kfznRagZs_69CqTsBZFR9facUOintGVDNJp7mMWe07TQ71uWU6DENfGTu_iDrX3N0P2JDzvoZHY" alt="Solitude" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="aspect-[4/3] overflow-hidden">
                <img className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA-Vu6No-V7ft3PKc7iAvg3P9awjPWHma-3F2lQa1XXb9fF-v872Ry1y99Y52ltrtty6jDY1q0G_t4z_SwutlgQs2EDP3HVMiBqIqfC2VgcMje3b2apRlmpZRcRC9w5VmpYxLLlbchVIG-HkT0UVUEJWsPc4TPjEXuZ8eoUVmNaSstfk3GjlvYcNMz7pjKDCX4qygM3-k4xj4XGS8ONExP7jdo80kDygfr39KuKcB9coLPvo5rUd-QAR0STGDII_5hkf0OXfdDjSGh" alt="Detail" />
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZB1A5YZf28sf1Zp4NOQQcHxrvsiTxJd3Lb3PECfXnBMQp4Dsdh7L47VzTL66u_PRDYp-eZtG21VDX2jvQ8UpHGHXIfiwgAolJXWS98Fu0j41IOt_gF5IPGJp1dUn94ea_FVgwpfgK7u1JZTVbTeyfFL8GQ50HRBw2FOo99DEvZrG_FCKs5PRCQI7vhcqK8eY66145k3hwQNxOAu1z8Fv7V7ZP6AxjpswnwmqqnJAF_4abTHz1Rw9Pn8dJdR4JN_yBh_GXA7wi-9U8" alt="Sanctuary" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-32 pt-12 border-t border-white/5">
            <div className="flex items-center gap-6">
              <span className="font-sans text-secondary text-[10px] tracking-widest uppercase">SHARE</span>
              <Share2 size={14} className="text-slate-500 cursor-pointer hover:text-white transition-colors" />
              <Bookmark size={14} className="text-slate-500 cursor-pointer hover:text-white transition-colors" />
            </div>
            <span className="font-sans text-[10px] text-slate-500 tracking-widest uppercase">ESTIMATED READ: 6 MINUTES</span>
          </div>
        </div>
      </article>

      {/* Back to News */}
      <div className="text-center py-16">
        <Link href="/news" className="inline-flex items-center gap-3 font-sans text-[10px] tracking-widest uppercase text-secondary border border-secondary/30 px-10 py-4 hover:border-secondary transition-colors">
          ← Quay Lại Tin Tức
        </Link>
      </div>
    </div>
  );
}

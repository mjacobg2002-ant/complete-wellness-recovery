import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "../siteConfig";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Authentic Baltimore Inner Harbor skyline (from completew.com), color-graded dark */}
      <motion.img
        src={site.images.hero}
        alt="The Baltimore Inner Harbor skyline at dusk, reflected on the water"
        className="absolute inset-0 h-full w-full object-cover"
        initial={reduce ? undefined : { scale: 1.08 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        loading="eager"
        fetchPriority="high"
      />
      {/* Cinematic forest/charcoal grade for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,32,56,0.72) 0%, rgba(14,32,56,0.32) 34%, rgba(14,32,56,0.66) 72%, rgba(14,32,56,0.95) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-forest-deep/25 mix-blend-multiply" />

      <div className="container-wrap relative z-10 pb-16 pt-32 sm:pb-20 lg:pb-28">
        <div className="max-w-4xl">
          <motion.p
            className="eyebrow text-ivory/75"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Substance Use Treatment · Baltimore, Maryland
          </motion.p>

          <motion.h1
            className="display mt-6 text-ivory text-[clamp(2.6rem,8vw,5.75rem)]"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            Recovery Built Around
            <br className="hidden sm:block" /> the Whole Person.
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
          >
            Individualized, evidence-based treatment that supports emotional, physical,
            spiritual and occupational wellness.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.54 }}
          >
            <a href="#programs" className="btn-light">
              Explore Our Programs <ArrowUpRight size={18} />
            </a>
            <a href={site.phoneHref} className="btn-outline">
              <Phone size={16} /> Call {site.phoneDisplay}
            </a>
          </motion.div>

          <motion.p
            className="mt-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-ivory/65"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="inline-block h-px w-8 bg-ivory/40" />
            {site.trustLine}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

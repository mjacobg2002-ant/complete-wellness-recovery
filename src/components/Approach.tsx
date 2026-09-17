import { dimensions, site } from "../siteConfig";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-forest-950 py-24 sm:py-32 lg:py-40">
      {/* Authentic skyline, deeply graded as an atmospheric backdrop */}
      <img
        src={site.images.skyline}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,28,22,0.96) 0%, rgba(21,42,32,0.9) 50%, rgba(14,28,22,0.97) 100%)",
        }}
      />

      <div className="container-wrap relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-clay/90">Our Approach</p>
            <h2 className="display mt-6 text-ivory text-[clamp(2rem,5vw,3.75rem)]">
              Treatment that sees more than the addiction.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/75">
              Recovery is personal. Complete Wellness creates individualized treatment plans
              that recognize mental health, relationships, daily responsibilities and
              long-term wellbeing.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {dimensions.map((d, i) => (
            <Reveal
              as="div"
              key={d.number}
              delay={i * 0.08}
              className="bg-forest-deep/40 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-forest/50 sm:p-9"
            >
              <span className="font-serif text-3xl font-light text-clay/80">{d.number}</span>
              <h3 className="mt-6 font-serif text-2xl font-medium text-ivory">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">{d.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

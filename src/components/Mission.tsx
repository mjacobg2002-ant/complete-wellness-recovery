import { Reveal } from "./Reveal";

export function Mission() {
  return (
    <section className="border-y border-forest/10 bg-stone/50 py-28 sm:py-36">
      <div className="container-wrap">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow text-clay">Our Mission</p>
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="display mt-8 text-forest-deep text-[clamp(1.9rem,4.6vw,3.4rem)]">
              &ldquo;Every individual deserves access to high-quality treatment focused on the
              whole person.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-charcoal/70">
              Complete Wellness provides evidence-based treatment in a supportive outpatient
              setting while addressing the wider impact of addiction on individuals and
              families.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

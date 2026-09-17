import { steps } from "../siteConfig";
import { Reveal } from "./Reveal";

export function Steps() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="container-wrap">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="eyebrow text-clay">Getting Started</p>
            <h2 className="display mt-5 text-forest-deep text-[clamp(2rem,5vw,3.4rem)]">
              How getting started works.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal as="div" key={step.number} delay={i * 0.08} className="relative">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-4xl font-light text-forest/30">
                  {step.number}
                </span>
                <span className="mt-1 h-px flex-1 bg-forest/15" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-medium text-forest-deep">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal/70">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

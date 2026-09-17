import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container-wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-clay">Who We Are</p>
              <div className="mt-6 h-px w-16 bg-forest/20" />
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <h2 className="display text-forest-deep text-[clamp(2rem,5vw,3.6rem)]">
                Every path to recovery is different.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/75">
                Complete Wellness Addiction Center treats the whole person, not only the
                addiction. Each client works with a counselor to develop an individualized
                program built around their needs, goals and circumstances.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href="#approach"
                className="link-underline mt-10 text-forest-deep hover:text-forest"
              >
                Learn About Complete Wellness <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

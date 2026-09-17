import { ArrowRight } from "lucide-react";
import { programs, site } from "../siteConfig";
import { Reveal } from "./Reveal";

export function Programs() {
  return (
    <section id="programs" className="border-t border-forest/10 bg-stone/40 py-24 sm:py-32">
      <div className="container-wrap">
        <div className="mb-16 max-w-2xl sm:mb-24">
          <Reveal>
            <p className="eyebrow text-clay">What We Offer</p>
            <h2 className="display mt-5 text-forest-deep text-[clamp(2rem,5vw,3.4rem)]">
              Programs designed around real lives.
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {programs.map((program, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal
                as="div"
                key={program.number}
                className="group border-t border-forest/15 py-10 first:border-t-0 sm:py-14"
              >
                <div
                  className={`grid items-center gap-6 sm:gap-10 lg:grid-cols-12 ${
                    reversed ? "" : ""
                  }`}
                >
                  {/* Number */}
                  <div className={`lg:col-span-2 ${reversed ? "lg:order-3" : "lg:order-1"}`}>
                    <span className="font-serif text-5xl font-light text-clay/80 sm:text-6xl">
                      {program.number}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-2"}`}>
                    <h3 className="font-serif text-2xl font-medium text-forest-deep sm:text-3xl">
                      {program.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-charcoal/70">
                      {program.description}
                    </p>
                  </div>

                  {/* Link + mark motif */}
                  <div
                    className={`flex items-center justify-between lg:col-span-3 lg:justify-end lg:gap-6 ${
                      reversed ? "lg:order-1" : "lg:order-3"
                    }`}
                  >
                    <img
                      src={site.images.mark}
                      alt=""
                      aria-hidden="true"
                      className="h-10 w-10 opacity-25 transition-all duration-500 ease-soft group-hover:opacity-70 sm:h-12 sm:w-12"
                    />
                    <a
                      href="#referrals"
                      className="link-underline text-forest-deep hover:text-forest"
                      aria-label={`Explore the ${program.title} program`}
                    >
                      Explore Program <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

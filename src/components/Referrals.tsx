import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { site } from "../siteConfig";
import { Reveal } from "./Reveal";

export function Referrals() {
  return (
    <section id="referrals" className="relative overflow-hidden bg-forest-deep py-24 sm:py-32">
      <img
        src={site.images.mark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-[0.07] sm:h-96 sm:w-96"
      />
      <div className="container-wrap relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-clay/90">Make a Referral</p>
            <h2 className="display mt-6 text-ivory text-[clamp(2rem,5vw,3.75rem)]">
              You don&rsquo;t have to navigate recovery alone.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/80">
              Whether you are seeking support for yourself, a loved one or someone you serve
              professionally, our team can help you understand the next step.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={site.phoneHref} className="btn-light">
                <Phone size={16} /> Call {site.phoneDisplay}
              </a>
              <a href={site.emailHref} className="btn-outline">
                <Mail size={16} /> Make a Referral
              </a>
              <a href={site.emailHref} className="btn-outline">
                <ArrowUpRight size={16} /> Email the Recovery Center
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-8 flex items-center gap-3 text-sm font-medium text-ivory/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
              {site.referralNote}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-ivory/45">
              Please do not share medical or substance-use details by email. A secure referral
              system or backend integration is required before any protected health information
              is collected.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin, Printer, Clock, AlertTriangle } from "lucide-react";
import { site } from "../siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Crisis notice — visible but unobtrusive */}
      <div className="bg-clay/12 border-y border-clay/25">
        <div className="container-wrap flex items-start gap-3 py-4">
          <AlertTriangle
            size={18}
            className="mt-0.5 shrink-0 text-clay"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-charcoal/80">
            If you or someone else is in immediate danger, call{" "}
            <a href="tel:911" className="font-semibold text-clay underline underline-offset-2">
              911
            </a>
            . For immediate emotional or substance-use crisis support, call or text{" "}
            <a href="tel:988" className="font-semibold text-clay underline underline-offset-2">
              988
            </a>
            .
          </p>
        </div>
      </div>

      {/* Location + footer */}
      <footer id="contact" className="bg-forest-950 text-ivory">
        <div className="container-wrap py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Brand + address */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <img src={site.images.mark} alt="" aria-hidden="true" className="h-11 w-11" />
                <div className="leading-none">
                  <p className="font-serif text-xl font-semibold text-ivory">
                    Complete Wellness
                  </p>
                  <p className="mt-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-ivory/60">
                    Addiction Center
                  </p>
                </div>
              </div>
              <address className="mt-8 not-italic text-ivory/75">
                <p className="flex items-start gap-3">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-clay" />
                  <span>
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </span>
                </p>
              </address>
              <a
                href={site.address.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-5 text-ivory/85 hover:text-ivory"
              >
                Get Directions
              </a>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-4">
              <p className="eyebrow text-clay/90">Recovery Center</p>
              <ul className="mt-6 space-y-4 text-ivory/80">
                <li>
                  <a href={site.phoneHref} className="flex items-center gap-3 hover:text-ivory">
                    <Phone size={16} className="text-clay" /> {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Printer size={16} className="text-clay" /> Fax {site.faxDisplay}
                </li>
                <li>
                  <a href={site.emailHref} className="flex items-center gap-3 hover:text-ivory">
                    <Mail size={16} className="text-clay" /> {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={16} className="text-clay" /> {site.hours}
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="lg:col-span-3">
              <p className="eyebrow text-clay/90">Take a Step</p>
              <div className="mt-6 flex flex-col gap-3">
                <a href={site.phoneHref} className="btn-light w-full">
                  Call Now
                </a>
                <a href={site.emailHref} className="btn-outline w-full">
                  Make a Referral
                </a>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-ivory/50">
                {site.referralNote} This form of contact is not monitored for emergencies.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-ivory/80">
                Privacy Policy
              </a>
              <span>State Certified and Licensed</span>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-[0.7rem] leading-relaxed text-ivory/35">
            This homepage is a redesign concept created for demonstration. Content and imagery
            are drawn from the organization&rsquo;s existing public materials. It does not
            collect protected health information and is not monitored for emergencies.
          </p>
        </div>
      </footer>
    </>
  );
}

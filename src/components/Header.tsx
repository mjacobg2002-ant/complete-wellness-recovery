import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navItems, site } from "../siteConfig";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft ${
        solid
          ? "bg-forest-deep/95 shadow-lg shadow-black/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-wrap flex h-[74px] items-center justify-between lg:h-[86px]">
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <img
            src={site.images.mark}
            alt=""
            aria-hidden="true"
            className="h-9 w-9 shrink-0 lg:h-10 lg:w-10"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-ivory lg:text-xl">
              Complete Wellness
            </span>
            <span className="mt-0.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-ivory/70">
              Addiction Center
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-ivory/85 hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
          <a href="#referrals" className="btn-light">
            Get Help
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-ivory/10 bg-forest-deep`}
      >
        <nav
          className="container-wrap flex flex-col gap-1 py-6"
          aria-label="Mobile primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ivory/10 py-4 font-serif text-2xl text-ivory/90"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-5 flex flex-col gap-3">
            <a href="#referrals" onClick={() => setOpen(false)} className="btn-light w-full">
              Get Help
            </a>
            <a href={site.phoneHref} className="btn-outline w-full">
              <Phone size={16} /> Call {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

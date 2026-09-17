/**
 * Single source of truth for all business information.
 * Verified against completew.com/recovery (recovery division contact details).
 */

export const site = {
  name: "Complete Wellness Addiction Center",
  shortName: "Complete Wellness",
  city: "Baltimore, Maryland",
  phoneDisplay: "443-961-3050",
  phoneHref: "tel:+14439613050",
  faxDisplay: "443-957-9485",
  email: "Recovery@CompleteW.com",
  emailHref: "mailto:Recovery@CompleteW.com",
  address: {
    line1: "309 Cathedral Street, Suite 200",
    line2: "Baltimore, MD 21201",
    full: "309 Cathedral Street, Suite 200, Baltimore, MD 21201",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=309+Cathedral+Street+Suite+200+Baltimore+MD+21201",
  },
  hours: "Monday–Friday, 9:00 AM–5:00 PM",
  referralNote: "Referrals accepted 24 hours a day, seven days a week.",
  trustLine: "State Certified and Licensed · Referrals Accepted 24/7",
  images: {
    hero: "./images/complete-wellness/baltimore-skyline.jpg",
    skyline: "./images/complete-wellness/baltimore-skyline.jpg",
    logo: "./images/complete-wellness/logo-complete-wellness.png",
    mark: "./images/complete-wellness/mark.png",
  },
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Our Approach", href: "#approach" },
  { label: "Referrals", href: "#referrals" },
  { label: "Contact", href: "#contact" },
];

export type Program = {
  number: string;
  title: string;
  description: string;
};

export const programs: Program[] = [
  {
    number: "01",
    title: "Intensive Outpatient Program",
    description:
      "Structured, evidence-based support that allows clients to receive treatment while remaining connected to their daily responsibilities.",
  },
  {
    number: "02",
    title: "Outpatient Program",
    description:
      "Flexible counseling and recovery support designed around each client's individual needs, goals and circumstances.",
  },
  {
    number: "03",
    title: "Family Group",
    description:
      "Support and education for families affected by substance use and addiction, so recovery is shared, not carried alone.",
  },
  {
    number: "04",
    title: "Sober Living Housing",
    description:
      "A supportive living environment focused on stability, accountability and continued recovery.",
  },
  {
    number: "05",
    title: "DUI / DWI Classes",
    description:
      "Educational programming for individuals completing applicable DUI or DWI requirements.",
  },
];

export type Dimension = {
  number: string;
  title: string;
  description: string;
};

export const dimensions: Dimension[] = [
  {
    number: "01",
    title: "Emotional Wholeness",
    description:
      "Care that recognizes mental health, self-understanding and emotional resilience as central to recovery.",
  },
  {
    number: "02",
    title: "Physical Wellness",
    description:
      "Restoring physical health and daily rhythm as a foundation for lasting change.",
  },
  {
    number: "03",
    title: "Spiritual Growth",
    description:
      "Room for meaning, purpose and personal belief — however each individual defines it.",
  },
  {
    number: "04",
    title: "Occupational Wellness",
    description:
      "Support for responsibilities, work and long-term wellbeing beyond the treatment room.",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Reach Out",
    description: "Call the center or submit a referral to begin the conversation.",
  },
  {
    number: "02",
    title: "Meet With a Counselor",
    description: "Discuss your circumstances, needs and goals in a supportive setting.",
  },
  {
    number: "03",
    title: "Create a Personal Plan",
    description: "Work together to develop an individualized treatment path.",
  },
  {
    number: "04",
    title: "Begin With Support",
    description: "Move forward with guidance from the treatment team beside you.",
  },
];

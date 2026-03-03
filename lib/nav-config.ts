/**
 * Global navigation configuration.
 * No page-specific logic   structure only.
 */

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // { label: "Solutions", href: "/solutions" },
    { label: "Automation", href: "/automation" },

  // { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

export const CTA = {
  label: "Start Your Project",
  href: "/contact",
} as const;

/** Single source of truth for brand + contact details used across the site. */

export const SITE_URL = "https://pixel-love-layout.lovable.app";

export const COMPANY = "Lumiwaves";
export const PRODUCT = "Zenith";

/** Digits only, international format — used to build tel: and wa.me links. */
export const PHONE_E164 = "+919876543210";
export const PHONE_DISPLAY = "+91 98765 43210";
export const EMAIL = "hello@lumiwaves.in";

export const TEL_HREF = `tel:${PHONE_E164}`;
export const MAIL_HREF = `mailto:${EMAIL}`;
export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi Lumiwaves, I'd like to know more about Zenith smart home automation.",
)}`;

export const ADDRESS_LINES = ["ECR Road, White Town", "Pondicherry 605001, India"];
export const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("White Town, Pondicherry 605001, India");

/**
 * Legal pages do not exist yet. Add entries here (label + route) once the
 * pages are created and the footer will render them automatically.
 */
export const LEGAL_LINKS: { label: string; to: string }[] = [];

/**
 * Social profiles. Add real URLs here to make the footer icons appear.
 */
export const SOCIAL_LINKS: { label: string; href: string }[] = [];

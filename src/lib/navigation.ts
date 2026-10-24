export const CONTACT_EMAIL = "hello@blackfamestudios.com";

export const CONTACT_REQUEST_EVENT = "blackfame:contact-request";

export interface ContactRequest {
  projectType?: string;
  message?: string;
}

export function scrollToSection(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Scrolls to the contact form and optionally pre-fills it.
export function requestContact(request: ContactRequest = {}) {
  window.dispatchEvent(
    new CustomEvent<ContactRequest>(CONTACT_REQUEST_EVENT, { detail: request })
  );
  scrollToSection("contact");
}

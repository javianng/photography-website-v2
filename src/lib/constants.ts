import { type Metadata } from "next";

export const SITE_CONFIG = {
  name: "shotbyj.av",
  description: "photographer, coder, entrepreneur",
  author: "Javian Ng",
  url: "https://shotbyj.av", // Update this with your actual domain
  navLinks: [
    { href: "/", label: "work" },
    { href: "/about-me", label: "about me" },
  ],
} as const;

export const METADATA: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL(SITE_CONFIG.url),
};

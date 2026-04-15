// src/config/media.js
const CLOUD = "dk59nufs1";
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`;

export const images = {
  hero: {
    bg: `${BASE}/nmc/hero-bg`,
    runner: `${BASE}/nmc/hero-runner`,
  },
  about: {
    portrait: `${BASE}/nmc/about-portrait`,
  },
  gallery: [
    `${BASE}/nmc/gallery-1`,
    `${BASE}/nmc/gallery-2`,
    `${BASE}/nmc/gallery-3`,
    `${BASE}/nmc/gallery-4`,
    `${BASE}/nmc/gallery-5`,
    `${BASE}/nmc/gallery-6`,
  ],
  cta: {
    track: `${BASE}/nmc/cta-track`,
  },
};

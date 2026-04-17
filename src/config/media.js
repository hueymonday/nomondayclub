// src/config/media.js
const CLOUD = "dk59nufs1";
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload/q_auto/f_auto`;

export const images = {
  hero: {
    bg: `${BASE}/hero-bg`,
  },
  reason: {
    rpic: `${BASE}/reason`,
  },
  myVision: {
    v1: `${BASE}/vision01`,
    v2: `${BASE}/vision02`,
    v3: `${BASE}/vision03`,
    v4: `${BASE}/vision04`,
    v5: `${BASE}/vision05`,
    v6: `${BASE}/vision06`,
  },
  cta: {
    track: `${BASE}/nmc/cta-track`,
  },
};

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
  about: {
    abt: `${BASE}/moreAbout`,
  },
  schedule: {
    sch1: `${BASE}/schedule01`,
    sch2: `${BASE}/schedule02`,
    sch3: `${BASE}/schedule03`,
  },
  cta: {
    track: `${BASE}/CTA-track`,
  },
  authen: {
    auth1: `${BASE}/authencation01`,
    auth2: `${BASE}/authencation02`,
    auth3: `${BASE}/authencation03`,
  },
};

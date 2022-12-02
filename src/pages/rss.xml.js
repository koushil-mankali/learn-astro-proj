import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Astro Learner | Blog",
    description: "Astro pratice blog",
    site: "https://6389c55e53ef780008b3fdfb--enchanting-concha-ca2dcb.netlify.app/",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });

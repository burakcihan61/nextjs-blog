export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "NextJS + Radix UI + Tailwind CSS | Blog",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  links: {
    twitter: "https://twitter.com/burakcihan61",
    github: "https://github.com/burakcihan61",
    linkedin: "https://www.linkedin.com/in/burakcihan61/",
  },
}

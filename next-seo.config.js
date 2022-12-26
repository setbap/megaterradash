import names from "lib/utility/names";

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "MegaTerraDash",
  titleTemplate: "%s | Business Intelligence Dashboard Terra",
  defaultTitle: "MegaTerraDash | Business Intelligence Dashboard Terra ",
  description:
    "Best Business Intelligence Dashboard Terra by MetricsDao, Flipside Crypto and Setbap ",
  canonical: "https://MegaTerraDash.vercel.app/",
  openGraph: {
    url: "https://MegaTerraDash.vercel.app/",
    title: "MegaTerraDash",
    description:
      "Best Business Intelligence Dashboard Terra by MetricsDao, Flipside Crypto and Setbap ",
    images: [
      {
        url: `https://${names.SITE_URL}/og.png`,
        alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
      },
    ],
    site_name: "MegaTerraDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;

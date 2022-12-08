import names from "lib/utility/names";

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "TerraDashPrime",
  titleTemplate: "%s | Business Intelligence Dashboard Terra",
  defaultTitle: "TerraDashPrime | Business Intelligence Dashboard Terra ",
  description:
    "Best Business Intelligence Dashboard Terra by MetricsDao, Flipside Crypto and Setbap ",
  canonical: "https://TerraDashPrime.vercel.app/",
  openGraph: {
    url: "https://TerraDashPrime.vercel.app/",
    title: "TerraDashPrime",
    description:
      "Best Business Intelligence Dashboard Terra by MetricsDao, Flipside Crypto and Setbap ",
    images: [
      {
        url: `https://${names.SITE_URL}/og.png`,
        alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
      },
    ],
    site_name: "TerraDashPrime",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;

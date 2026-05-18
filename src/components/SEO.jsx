import { Helmet } from "react-helmet-async";

const siteUrl = "https://preciousevans.com";
const siteName = "Precious Evans";
const defaultTitle =
  "Precious Evans | Personal Brand Strategist for Experts, Coaches and Professionals";
const defaultDescription =
  "Build a personal brand around who you really are. Precious Evans helps corporate professionals, entrepreneurs and coaches clarify their story, voice and positioning through the T.R.U.E. Method.";
const defaultImage = `${siteUrl}/images/pepicture.png`;

const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  path = "/",
  image = defaultImage,
  type = "website",
}) => {
  const canonicalUrl = `${siteUrl}${path}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: siteUrl,
    image,
    description,
    founder: {
      "@type": "Person",
      name: "Precious Evans",
      jobTitle: "Personal Brand Strategist",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Personal Brand Strategy",
      "Brand Positioning",
      "Messaging Strategy",
      "Personal Brand Development",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Precious Evans, personal brand strategist, personal branding, brand strategy, brand positioning, TRUE Method, coach branding, expert branding, entrepreneur branding"
      />
      <meta name="author" content="Precious Evans" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Precious Evans" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;

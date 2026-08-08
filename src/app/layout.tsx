import type { Metadata } from "next";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/inter";
import "./globals.css";

const title =
  "Serai Media | Social & Brand Strategy for Premium Brands, Austin";
const description =
  "Serai Media helps premium retail, restaurant & wellness brands with great products get the visibility they deserve. Branding, social media, ads & influencer management.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seraimedia.com"),
  title,
  description,
  authors: [{ name: "Serai Media" }],
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "Serai Media",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#F7F7F5",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Serai Media",
  description:
    "Social, brand, and growth partner for premium retail, restaurant, and wellness brands in Austin and beyond.",
  email: "hello@seraimedia.com",
  areaServed: "Austin, TX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Vandhana Srinivasan",
    jobTitle: "Principal Strategist & Founder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

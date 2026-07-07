import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/navbar/footer";
import { Providers } from "./providers";
import { SITE_URL, absoluteUrl, buildOrganizationJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "City of David Tabernacle",
    template: "%s | City of David Tabernacle",
    absolute: "",
  },
  description: "Bringing Restoration to the Humanity and the Dying World",
  icons: {
    icon: [{ url: "favicon.ico", sizes: "48x48" }],
  },
  keywords: [
    "City of David Tabernacle",
    "City of David",
    "Restoration Chapel",
    "Victory Chapel",
    "CODT",
    "Church",
    "Church in Imo State",
    "church in Nigeria",
    "Church in Owerri",
    "Worship Centers in Owerri",
    "restoration",
    "Christianity",
    "Bishop Joel Njoku",
    "Bishop Joel Andrew",
    "Bishop Joel Njoku Andrew",
    "church online",
    "faith community",
    "spiritual growth",
    "religious gatherings",
    "Bible teachings",
    "prayer meetings",
    "Church services",
    "Christian sermons",
    "worship center",
  ],
  openGraph: {
    title: "City of David Tabernacle",
    description: "Bringing Restoration to the Humanity and the Dying World",
    locale: "en_US",
    type: "website",
    url: SITE_URL,
    siteName: "City of David Tabernacle",
    images: [
      {
        url: "/codt_logo.png",
        width: 1200,
        height: 630,
        alt: "City of David Tabernacle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "City of David Tabernacle",
    description: "Bringing Restoration to the Humanity and the Dying World",
    images: ["/codt_logo.png"],
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = buildOrganizationJsonLd();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <Navbar />
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}

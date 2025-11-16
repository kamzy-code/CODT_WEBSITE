import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/navbar/footer";
import { Providers } from "./providers";

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
  metadataBase: new URL(
    process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"
  ),
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
    url: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"}`,
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
    canonical: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"}`,
  },
};

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Church",
    name: "City of David Tabernacle",
    url: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"}`,
    logo: `${process.env.WEBSITE_URL}/codt_logo.png`,
    description: "Bringing Restoration to Humanity and the Dying World.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5010 Sunnyside Avenue STE 309 Beltsville, MD 20705",
      addressLocality: "Baltimore",
      addressRegion: "Maryland",
      addressCountry: "USA",
    },
    sameAs: [
      "https://www.facebook.com/share/17XL1mMWt6/",
      "https://www.instagram.com/cityofdavidtabernacle?igsh=MTk2NW9rZng5dzBq",
      "https://www.youtube.com/@victorychapelmd_cod",
      "https://www.facebook.com/share/1CnefnRZEy/",
      "https://www.tiktok.com/@cityofdavidtabernacle?_r=1&_d=edc962904ebf2m&sec_uid=MS4wLjABAAAAy_qQIcHAFCk7Yh_v7B16_QMJIrLQeGhZ0WF9yJ2LblNyuALsqWBmNjE6Yw7mZYHy&share_author_id=7483171134293607430&sharer_language=en&source=h5_m&u_code=ejai5i3hfhlbi8&timestamp=1762434878&user_id=7483171134293607430&sec_user_id=MS4wLjABAAAAy_qQIcHAFCk7Yh_v7B16_QMJIrLQeGhZ0WF9yJ2LblNyuALsqWBmNjE6Yw7mZYHy&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7534814119968851726&share_link_id=486c458e-0fdc-40a0-9182-a37cb2e3d071&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1",
      "https://www.facebook.com/share/1D14dY5w2o/",
      "https://web.facebook.com/BishopNjokuJoel",
      "https://www.instagram.com/bishopjoelnjoku?igsh=Y244NHZtZXdqOGpm",
      "https://youtube.com/@bishopjoelandrew?si=vVl8gilAuajPJzWU",
    ],
  })}
</script>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}

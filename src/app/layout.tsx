import { Analytics } from "@/components/analytics/Analytics";
import { CookieConsent } from "@/components/compliance/CookieConsent";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { WhatsAppLauncher } from "@/components/whatsapp/WhatsAppLauncher";
import { siteUrl } from "@/lib/site-config";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "KACERTIFIEX | Clarity for Better Business Decisions",
    template: "%s | KACERTIFIEX",
  },
  description:
    "Partner-led tax, audit and consulting in Lagos. KACERTIFIEX helps Nigerian and international leaders build lasting advantage through rigour, clarity and execution.",
  metadataBase: new URL(siteUrl()),
  openGraph: {
    locale: "en_NG",
    type: "website",
    siteName: "KACERTIFIEX",
  },
  twitter: {
    card: "summary_large_image",
    title: "KACERTIFIEX | Clarity for Better Business Decisions",
    description:
      "Nigerian financial, tax and management advisory for SMEs, corporates and international investors.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      className={`${inter.variable} ${manrope.variable} ${cormorant.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <OrganizationJsonLd />
        <Analytics />
        <SiteHeader />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileActionBar />
        <WhatsAppLauncher />
        <CookieConsent />
      </body>
    </html>
  );
}

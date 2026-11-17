import type { Metadata, Viewport } from "next";
import { Andada_Pro, Epilogue, Sono } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBar from "@/components/MobileBar";
import WallpaperEdge from "@/components/WallpaperEdge";

const andada = Andada_Pro({
  subsets: ["latin"],
  variable: "--font-andada",
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

const sono = Sono({
  subsets: ["latin"],
  variable: "--font-sono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s · Schildersbedrijf Miki",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: { icon: content.company.logo },
};

export const viewport: Viewport = { themeColor: content.colors.background };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${andada.variable} ${epilogue.variable} ${sono.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col bg-paper font-sans text-[1.125rem] leading-[1.6] text-ink">
        <a href="#inhoud" className="skip">
          Naar inhoud
        </a>
        <div className="flex min-h-full flex-1 flex-col min-[1180px]:flex-row">
          <WallpaperEdge />
          <div className="flex min-w-0 flex-1 flex-col">
            <SiteHeader />
            <main id="inhoud" className="flex-1">
              {children}
            </main>
            <SiteFooter />
            <div className="px-5 pb-24 pt-1 md:px-10 md:pb-8">
              <SleadsBadge />
            </div>
          </div>
        </div>
        <MobileBar />
      </body>
    </html>
  );
}

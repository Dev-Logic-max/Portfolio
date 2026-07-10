import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { StructuredData } from "@/components/seo/structured-data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE = {
  name: "Abdul Rehman — Dev Logic Max",
  title: "Abdul Rehman · Senior Full-Stack & DevOps Engineer",
  description:
    "Senior full-stack + DevOps engineer who ships and operates production SaaS — and the studio behind it, Dev Logic Max. Multi-tenant architecture, integrations, CI/CD, self-hosted infra.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devlogicmax.com", // TODO(abdul): confirm custom domain
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s · Abdul Rehman" },
  description: SITE.description,
  keywords: [
    "Abdul Rehman",
    "Dev Logic Max",
    "senior full-stack developer",
    "DevOps engineer",
    "Next.js developer",
    "NestJS developer",
    "SaaS developer",
    "multi-tenant architecture",
  ],
  authors: [{ name: "Abdul Rehman" }],
  creator: "Abdul Rehman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfe" },
    { media: "(prefers-color-scheme: dark)", color: "#070a14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (Grammarly, etc.) inject
          data-* attributes on <body> before hydration — harmless mismatch. */}
      <body className="min-h-full bg-bg text-fg" suppressHydrationWarning>
        <StructuredData />
        <ThemeProvider>
          <SmoothScroll>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
            >
              Skip to content
            </a>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
